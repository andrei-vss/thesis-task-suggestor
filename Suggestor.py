from DataLoader import DataLoader
from DataProcesor import DataProcesor
from sklearn.pipeline import Pipeline
from sklearn.model_selection import KFold
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.linear_model import SGDClassifier
from sklearn.svm import LinearSVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import MultinomialNB
from sklearn.naive_bayes import BernoulliNB
from sklearn.multiclass import OneVsRestClassifier
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_selection import SelectKBest, chi2
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix
from sklearn.calibration import CalibratedClassifierCV
import pandas as pd


class Suggestor:
    def __init__(self):
        self.ctVect = None
        self.tfidf = None
        self.chi = None
        self.stopwords = None
        self.calibrated_svc = None
        self.dataProcesor = None

    def start(self):
        dataLoader = DataLoader("data")
        value = dataLoader.get_active_user_to_issue_resolved(threshooldForUserIssues=120,  fixDistribution=True)
        self.dataProcesor = DataProcesor(value)

        # pipeline = Pipeline([('vectorizer', CountVectorizer()),
        #                      ('tfidf', TfidfTransformer()),
        #                      ('chi', SelectKBest(chi2, k=800)),
        #                      ('classifier', MultinomialNB())]
        #                     )
        self.stopwords = self.dataProcesor.getStopWords(useDescriptionInsteadOfTitle=True, threshoold=840)
        stopwords2 = self.dataProcesor.getStopWords(useDescriptionInsteadOfTitle=False, threshoold=120)

        self.stopwords.update(stopwords2)

        # k_fold = KFold(n_splits=100, shuffle=True)
        # scores = []

        X = [self.dataProcesor.cleanUp(row[1] + ". " + row[3], self.stopwords) for row in value]
        Y = [row[2] for row in value]
        # labels = LabelEncoder()
        # Y = labels.fit_transform(YRaw)

        # for train_indices, test_indices in k_fold.split(value):
        #     train_text = []
        #     train_y = []
        #     test_text = []
        #     test_y = []
        #
        #     for t in train_indices:
        #         train_text.append(X[t])
        #         train_y.append(Y[t])
        #
        #     for t in test_indices:
        #         test_text.append(X[t])
        #         test_y.append(Y[t])
        #
        #     pipeline.fit(train_text, train_y)
        #     score = pipeline.score(test_text, test_y)
        #     scores.append(score)
        #
        # avg_score = sum(scores) / len(scores)
        # print("The accuracy for classifier is : ", (avg_score))



        self.ctVect = CountVectorizer()
        self.tfidf = TfidfTransformer()
        self.chi = SelectKBest(chi2, k=800)
        print(X)
        step1 = self.ctVect.fit_transform(X)
        step2 = self.tfidf.fit_transform(step1)
        step3 = self.chi.fit_transform(step2, Y)

        linear_svc = LinearSVC()
        clf = linear_svc.fit(step3, Y)

        self.calibrated_svc = CalibratedClassifierCV(base_estimator=linear_svc,
                                                cv="prefit")
        self.calibrated_svc.fit(step3, Y)

    def predict(self, value):
        step1Test = self.ctVect.transform([self.dataProcesor.cleanUp(value, self.stopwords)])
        step2Test = self.tfidf.transform(step1Test)
        step3Test = self.chi.transform(step2Test)
        predicted = self.calibrated_svc.predict_proba(step3Test)
        probabilites = pd.DataFrame(predicted, columns=self.calibrated_svc.classes_).sort_values(by=0, ascending=False, axis=1)
        print(probabilites)
        return ["ana are mere", "vasile are pere"]

    def test(self):
        return 1









