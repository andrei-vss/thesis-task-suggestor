from RMDataGrabber import RMDataGrabber
from RMDataProcessor import RMDataProcessor
from RMFeatureSelector import RMFeatureSelector
from RMDataStatistics import RMDataStatistics
from RMDimReduction import RMDimReduction
from RMHyperParams import RMHyperParams

from sklearn.calibration import CalibratedClassifierCV
from sklearn.model_selection import train_test_split

import pandas as pd


class RMSuggestor:
    def __init__(self):
        self.data_grabber = RMDataGrabber(bring_description=False)
        self.data_processor = RMDataProcessor()
        self.data_statistic = RMDataStatistics()
        self.feature_selector = RMFeatureSelector()
        self.dim_reductor = RMDimReduction()
        self.hyper_params = RMHyperParams()
        self.ml_algorithm = None
        self.cccv_probabilities = None

    def start(self):
        issue_matrix = self.data_grabber.get_issue_data()
        issue_matrix_tokens = self.data_processor.get_tokens_from_text_matrix(issue_matrix, 1)
        # leave_one_out = self.data_processor.leave_one_out(issue_matrix_tokens, 0)
        content_matrix_vector, labels = self.data_processor.get_vector_from_tokens_matrix(issue_matrix_tokens, 0, 1,
                                                                                          'TfIdf')

        # leave_one_out_vector, leave_one_out_labels = self.data_processor.get_items_with_tfidf(leave_one_out, 0, 1)
        fixed_distribution_vector, labels = self.data_processor.fix_distribution(content_matrix_vector, labels, 50)

        # filtered_features = self.feature_selector.get_best_features_percentile(30, fixed_distribution_vector, labels)
        # filtered_features_leave_one_out = self.feature_selector.get_items_best_features_percentile(leave_one_out_vector)
        # reduced_vector = self.dim_reductor.get_lsa_vector(10, filtered_features)

        x_train, x_test, y_train, y_test = train_test_split(fixed_distribution_vector, labels, test_size=0.10,
                                                            random_state=1)

        self.ml_algorithm = self.hyper_params.get_naive_bayes(x_train, y_train)
        self.train_for_proba(x_train, y_train)
        # self.print_results(x_test, y_test, leave_one_out_vector, leave_one_out_labels, 10, labels)

        return

    def train_for_proba(self, x_train, y_train):
        self.cccv_probabilities = CalibratedClassifierCV(base_estimator=self.ml_algorithm, cv="prefit")
        self.cccv_probabilities.fit(x_train, y_train)

    def print_results(self, x_test, y_test, leave_one_out_vector, leave_one_out_labels, top_n, labels):
        # print("Accuracy: " + str(self.ml_algorithm.score(x_test.toarray(), y_test)))
        # print(classification_report(y_test, self.ml_algorithm.predict(x_test.toarray())))
        # self.data_statistic.plot_conf_matrix(confusion_matrix(y_test, self.ml_algorithm.predict(x_test)), labels, "Titlu + Desc cu Bow si filtrare 30")
        leave_one_out_results = []
        counter = 0
        for item in leave_one_out_vector:
            if counter == 9:
                t = 0
            predicted = self.cccv_probabilities.predict_proba(item)
            probabilites = pd.DataFrame(predicted, columns=self.cccv_probabilities.classes_).sort_values(by=0,
                                                                                                         ascending=False,
                                                                                                         axis=1)
            leave_one_out_results.append(probabilites)
            counter += 1
        place_of_hit = self.data_statistic.calculate_hit_rate(leave_one_out_labels, leave_one_out_results, top_n=top_n)
        print("HitRate: " + str(len(place_of_hit) / len(leave_one_out_labels)))
        test = 0

    def predict(self, value):
        result = []
        x = self.data_processor.get_item_with_tfidf(
            self.data_processor.tokenize(value))
        predicted = self.cccv_probabilities.predict_proba(x)
        probabilites = pd.DataFrame(predicted, columns=self.cccv_probabilities.classes_).sort_values(by=0,
                                                                                                     ascending=False,
                                                                                                     axis=1)
        for i, j in probabilites.iterrows():
            counter = 0
            for item in j.values:
                result.append(str(probabilites.columns.values[counter]) + ' - ' + str(item))
                counter += 1
        return result
