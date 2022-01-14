from sklearn.decomposition import PCA, TruncatedSVD


class RMDimReduction:
    def __init__(self):
        self.pca = None
        self.lsa = None

    def get_lsa_vector(self, percent, vector):
        vector_size = float(len(vector[0].A[0]))
        n_components = int((vector_size*(percent/100.0)))
        self.lsa = TruncatedSVD(n_components=n_components,
                                n_iter=10,
                                random_state=3)

        less_vectors = self.lsa.fit_transform(vector)
        return less_vectors

    def get_pca_vector(self, percent, vector):
        self.pca = PCA(percent)
        less_vectors = self.pca.fit_transform(vector)
        return less_vectors

    def get_pca_vector_item(self, percent, vector):
        self.pca = PCA(percent)
        less_vectors = self.pca.fit_transform(vector)
        return less_vectors

