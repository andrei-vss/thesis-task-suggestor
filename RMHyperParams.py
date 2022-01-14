from sklearn.model_selection import GridSearchCV
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC
from sklearn.multiclass import OneVsRestClassifier

from sklearn.tree import DecisionTreeClassifier
import numpy as np


# self.ml_algorithm = LogisticRegression(C=1.0, intercept_scaling=1, fit_intercept=True, penalty='l2', tol=0.0001)
# self.ml_algorithm = OneVsRestClassifier(MultinomialNB(fit_prior=True, class_prior=None))
# self.ml_algorithm = OneVsRestClassifier(LogisticRegression(solver='sag'), n_jobs=1)

class RMHyperParams:
    def __init__(self):
        self.grid = None

    @staticmethod
    def get_naive_bayes(x_train, y_train):
        param_search = GridSearchCV(estimator=MultinomialNB(fit_prior=True),
                                    param_grid=dict(alpha=np.linspace(0, 2, 20)[1:]),
                                    n_jobs=6)
        param_search.fit(x_train, y_train)
        selected_alpha = param_search.best_estimator_.alpha
        model = MultinomialNB(alpha=selected_alpha, fit_prior=True)
        model.fit(x_train, y_train)
        return model

    @staticmethod
    def get_logistic_regression(x_train, y_train):
        grid_values = {'C': [0.001, .009, 0.01, .09, 1, 5, 10, 25], 'fit_intercept': [True, False]}
        param_search = GridSearchCV(estimator=LogisticRegression(),
                                    param_grid=grid_values,
                                    n_jobs=6)
        param_search.fit(x_train, y_train)
        selected_c = param_search.best_estimator_.C
        selected_fit_intercept = param_search.best_estimator_.fit_intercept
        model = OneVsRestClassifier(
            LogisticRegression(C=selected_c, intercept_scaling=1, penalty='l2', fit_intercept=selected_fit_intercept,
                               tol=0.0001), n_jobs=3)
        model.fit(x_train, y_train)
        return model

    @staticmethod
    def get_svm(x_train, y_train):
        grid_values = {'C': [1, 10, 100, 1000], }
        param_search = GridSearchCV(LinearSVC(max_iter=5000), grid_values, n_jobs=4)
        param_search.fit(x_train, y_train)
        selected_c = param_search.best_estimator_.C
        model = OneVsRestClassifier(LinearSVC(C=selected_c))
        model.fit(x_train, y_train)
        return model
