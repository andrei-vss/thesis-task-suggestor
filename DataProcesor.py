from nltk import WordNetLemmatizer
import nltk
import re
import string


class DataProcesor:
    def __init__(self, data):
        self.data = data
        self.wordLemmatizer = WordNetLemmatizer()
        self.stem = nltk.stem.SnowballStemmer('english')

    def getStopWords(self, useDescriptionInsteadOfTitle=False, threshoold=0):
        data = []
        if useDescriptionInsteadOfTitle:
            data = [row[3] for row in self.data]
        else:
            data = [row[1] for row in self.data]

        wordsDict = {}
        for sntc in data:
            words = nltk.tokenize.word_tokenize(sntc.lower())
            for word in words:
                if word not in wordsDict:
                    wordsDict[word] = 1
                else:
                    wordsDict[word] += 1

        return set(t for t in wordsDict.keys() if wordsDict[t] > threshoold)

    def cleanUp(self, s, stopwords):
        s = s.lower()
        pattern = '[0-9]'
        tokens = nltk.tokenize.word_tokenize(s)
        tokens = [t for t in tokens if len(t) > 2]
        tokens = [re.sub(pattern, '', i) for i in tokens]
        tokens = [t for t in tokens if t is not string.punctuation]
        tokens = [self.wordLemmatizer.lemmatize(t) for t in tokens]
        tokens = [t for t in tokens if t not in stopwords]
        tokens = [self.stem.stem(t) for t in tokens]
        result = " ".join(tokens)
        return re.sub(' +', ' ', result).replace('.', '')
