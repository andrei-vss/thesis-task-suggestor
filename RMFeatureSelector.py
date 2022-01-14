from sklearn.feature_selection import SelectKBest, chi2, SelectPercentile


class RMFeatureSelector:
    def __init__(self):
        self.select_k_best = None
        self.select_percentile = None

    def get_best_features_percentile(self, percent, vector, labels):
        self.select_percentile = SelectPercentile(chi2, percentile=percent)
        less_vectors = self.select_percentile.fit_transform(vector, labels)
        return less_vectors

    def get_best_features(self, max_values, vector, labels):
        self.select_k_best = SelectKBest(chi2, k=max_values)
        less_vectors = self.select_k_best.fit_transform(vector, labels)
        return less_vectors

    def get_item_best_features(self, vector):
        if self.select_k_best is not None:
            return self.select_k_best.transform([vector])
        print('Trying to get a less vector for k_best, but k_best was not generated!')
        return None

    def get_item_best_features_percentile(self, vector):
        if self.select_percentile is not None:
            return self.select_percentile.transform([vector])
        print('Trying to get a less vector for k_best percentile, but k_best percentile was not generated!')
        return None

    def get_items_best_features_percentile(self, vector):
        if self.select_percentile is not None:
            result = []
            for row in vector:
                result.append(self.select_percentile.transform(row))
            return result
        print('Trying to get a less vector for k_best percentile, but k_best percentile was not generated!')
        return None
