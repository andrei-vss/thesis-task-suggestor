import nltk
import re
import string
import numpy as np
from collections import Counter
from nltk import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from imblearn.over_sampling import SMOTE
from gensim.models import Word2Vec
import random
import pandas as pd


class RMDataProcessor:
    def __init__(self):
        self.stop_words = set(w.rstrip() for w in open('data/stopwords.txt'))
        self.word_lemmatizer = WordNetLemmatizer()
        self.word_stemmer = nltk.stem.SnowballStemmer('english')
        self.count_vectorizer = None
        self.tfidf_vectorizer = None
        self.bag_of_words_index_map = None
        self.smote = None
        self.extra_vector = []
        self.word_to_vec = None

    def get_tokens_from_text_matrix(self, matrix, text_index):
        tokens_matrix = []
        vocab = {}
        for row in matrix:
            vector_matrix_row = [None] * len(row)
            counter = 0
            for i in row:
                if counter != text_index:
                    vector_matrix_row[counter] = row[counter]
                else:
                    tokens = self.tokenize(str(i))
                    vector_matrix_row[text_index] = tokens
                    for token in tokens.split(" "):
                        vocab[token] = token
                counter += 1
            tokens_matrix.append(vector_matrix_row)

        return tokens_matrix

    def get_vector_from_tokens_matrix(self, matrix, label_index, tokens_index, method=None):
        if method is not None:
            if method == 'Word2Vec':
                return self.get_word_to_vec(matrix, tokens_index, label_index)
            elif method == 'BagOfWordsFreq':
                return self.get_freq_bag_of_words(matrix, tokens_index, label_index)
            elif method == 'TfIdf':
                return self.get_tfidf(matrix, tokens_index, label_index)

    def get_word_to_vec(self, matrix, token_index, label_index):
        labels = [row[label_index] for row in matrix]
        vectors = [row[token_index].split(" ") for row in matrix]
        self.word_to_vec = Word2Vec(vectors, min_count=2, size=100)
        self.word_to_vec.train(vectors, total_examples=len(vectors), epochs=20)
        vocabulary = self.word_to_vec.wv.vocab
        print(vocabulary)

        w2v = {w: vec for w, vec in zip(self.word_to_vec.wv.index2word, self.word_to_vec.wv.syn0)}
        dim = 0
        if len(w2v) > 0:
            dim = len(next(iter(w2v.values())))
        return np.array([
            np.mean([w2v[w] for w in words if w in w2v]
                    or [np.zeros(dim)], axis=0)
            for words in vectors
        ]), pd.Series(labels)

    def get_tfidf(self, matrix, token_index, label_index):
        # self.tfidf_vectorizer = TfidfVectorizer(min_df=3, stop_words="english", sublinear_tf=True, norm='l2', ngram_range=(1, 2))
        self.tfidf_vectorizer = TfidfVectorizer(sublinear_tf=True, norm='l2', ngram_range=(1, 2))
        labels = [row[label_index] for row in matrix]
        vectors = [row[token_index] for row in matrix]
        result = self.tfidf_vectorizer.fit_transform(vectors)

        return result, pd.Series(labels)

    def get_freq_bag_of_words(self, matrix, token_index, label_index):
        self.count_vectorizer = CountVectorizer()
        labels = [row[label_index] for row in matrix]
        vectors = [row[token_index] for row in matrix]
        vectors = self.count_vectorizer.fit_transform(vectors)

        return vectors, labels

    def get_item_with_bag_of_words_freq(self, tokens):
        if self.count_vectorizer is not None:
            vector = self.count_vectorizer.transform([tokens])
            return vector
        print('Trying to get a vector for bag of words freq, but bag of words freq was not generated!')
        return None

    def get_item_with_tfidf(self, tokens):
        if self.tfidf_vectorizer is not None:
            vector = self.tfidf_vectorizer.transform([tokens])
            return vector
        print('Trying to get a vector for tfidf, but tfidf was not generated!')
        return None

    def get_items_with_tfidf(self, matrix, label_index, token_index):
        if self.tfidf_vectorizer is not None:
            result = []
            labels = [row[label_index] for row in matrix]
            vectors = [row[token_index] for row in matrix]
            for row in vectors:
                vector = self.tfidf_vectorizer.transform([row])
                result.append(vector)
            return result, labels
        print('Trying to get a vector for tfidf, but tfidf was not generated!')
        return None

    def get_items_with_bag_of_words(self, matrix, label_index, token_index):
        if self.count_vectorizer is not None:
            result = []
            labels = [row[label_index] for row in matrix]
            vectors = [row[token_index] for row in matrix]
            for row in vectors:
                vector = self.count_vectorizer.transform([row])
                result.append(vector)
            return result, labels
        print('Trying to get a vector for bag of words, but bow was not generated!')
        return None

    def tokenize(self, s):
        # remove url
        s = re.sub(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', '', s)
        # remove stack-trace
        s = s[:s.find("Stack trace:")]
        # remove hexCode
        s = re.sub(r'(\w+)0x\w+', '', s)
        # tokenize
        tokens = nltk.tokenize.word_tokenize(s)
        # clean lower tokens
        tokens = [re.sub("[^a-zA-Z]", " ", t) for t in tokens]
        s = " ".join(tokens).lower()
        tokens = nltk.tokenize.word_tokenize(s)
        # remove words formed with 2 chars
        tokens = [t for t in tokens if len(t) > 2]
        # remove stop words
        tokens = [t for t in tokens if t not in self.stop_words]
        # lemmatize
        tokens = [self.word_lemmatizer.lemmatize(t) for t in tokens]
        # stem
        tokens = [self.word_stemmer.stem(t) for t in tokens]
        return re.sub(' +', ' ', " ".join(tokens))

    @staticmethod
    def is_number(n):
        try:
            float(n)
        except ValueError:
            return False
        return True

    @staticmethod
    def combine_text_matrix_by_id(mat1, mat2, matrix1_index, matrix2_index, matrix1_text_index, matrix2_text_index):
        result = mat1.copy()
        matrix2_dict = {}
        for row in mat2:
            matrix2_dict[row[matrix2_index]] = row[matrix2_text_index]

        for row in result:
            if row[matrix1_index] in matrix2_dict:
                row[matrix1_text_index] += '. ' + matrix2_dict[row[matrix1_index]]
        return result

    def leave_one_out_item(self, matrix, label_index, text_index, user_id):
        poss_index = []
        counter = 0
        for row in matrix:
            if row[label_index] == user_id:
                poss_index.append(counter)
            counter += 1

        selected = random.choice(poss_index)

        text = matrix[selected][text_index]
        del matrix[selected]
        return text

    def leave_one_out(self, matrix, label_index):
        result = []
        already_in = {}
        random.seed(9001)
        counter = 0
        for row in matrix:
            selected = bool(random.getrandbits(1))
            if selected and row[label_index] not in already_in:
                result.append(row)
                already_in[row[label_index]] = True
                del matrix[selected]
            counter += 1
        return result

    def fix_distribution(self, matrix, labels, over_the_mean_percent):
        item_labels = []
        for row in labels:
            item_labels.append(row)

        user_to_issue_counter = Counter(item_labels)

        mean = np.array(list(user_to_issue_counter.values())).mean()
        user_to_fix_smote = {}
        threshold = mean - ((over_the_mean_percent * mean) / 100.0)
        for row in user_to_issue_counter:
            if user_to_issue_counter[row] < threshold:
                user_to_fix_smote[row] = int(mean)

        self.smote = SMOTE(user_to_fix_smote)
        x_fixed, y_fixed = self.smote.fit_sample(matrix, labels)

        item_labels = []
        for row in y_fixed:
            item_labels.append(row)

        user_to_issue_counter = Counter(item_labels)
        mean = np.array(list(user_to_issue_counter.values())).mean()
        return x_fixed, y_fixed
