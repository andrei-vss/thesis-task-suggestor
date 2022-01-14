import nltk
from nltk import WordNetLemmatizer
import numpy as np
from sklearn.ensemble import RandomForestClassifier

class TextPreprocesor:

    def getProcessedData(self, data):
        wordLemmatizer = WordNetLemmatizer()
        stopwords = set(w.rstrip() for w in open('data/stopwords.txt'))
        allTokens = []
        wordIndexMap = {}
        index = 0

        for row in data:
            tokens = self.myTokenizer(row[1], stopwords, wordLemmatizer)
            if len(tokens) == 0:
                continue

            allTokens.append([tokens, row[2]])
            for token in tokens:
                if token not in wordIndexMap:
                    wordIndexMap[token] = index
                    index += 1

        N = len(allTokens)
        data = np.zeros((N, len(wordIndexMap) + 1))
        i = 0
        for row in allTokens:
            xy = self.tokensToVector(row[0], wordIndexMap, row[1])
            data[i, :] = xy
            i += 1

        np.random.shuffle(data)
        X = data[:, :-1]
        Y = data[:, -1]

        X_train = X[:-100, ]
        Y_train = Y[:-100, ]

        X_test = X[-100:, ]
        Y_test = Y[-100:, ]

        return X_train, Y_train, X_test, Y_test



    def myTokenizer(self, s, stopwords, wordLemmatizer):
        s = s.lower()
        tokens = nltk.tokenize.word_tokenize(s)
        tokens = [t for t in tokens if len(t) > 2]
        tokens = [wordLemmatizer.lemmatize(t) for t in tokens]
        tokens = [t for t in tokens if t not in stopwords]
        tokens = [t for t in tokens if t is not self.isNumber(t)]
        return tokens

    def isNumber(self, n):
        try:
            float(n)
        except ValueError:
            return False
        return True

    def tokensToVector(self, tokens, wordIndexMap, label):
        x = np.zeros(len(wordIndexMap) + 1)
        for t in tokens:
            i = wordIndexMap[t]
            x[i] += 1

        if x.sum() == 0:
            test = 2

        x = x / x.sum()
        x[-1] = label
        return x