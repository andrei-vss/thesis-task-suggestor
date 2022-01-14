import numpy as np
import pandas as pd
from collections import Counter
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.decomposition import PCA, TruncatedSVD, LatentDirichletAllocation


class RMDataStatistics:
    def __init__(self):
        self.test = 0

    def get_max_voc(self):
        data = pd.read_csv('data/issues3.csv', sep="\t")
        title = 0
        desc = 0
        for issue in data.values:
            issue_owner_id = issue[0]
            issue_title = issue[1]
            issue_description = issue[2]

    def plot_distribution(self, matrix):
        item_labels = []
        for row in matrix:
            item_labels.append(row)

        self.plot_bar_from_counter(Counter(item_labels))

    def plot_conf_matrix(self, matrix, labels, title):

        item_labels = {}
        for row in labels:
            item_labels[row] = row

        df_cm = pd.DataFrame(matrix, index=[i for i in item_labels],
                             columns=[i for i in item_labels])
        plt.figure(figsize=(10, 7))
        plt.style = 'plain'
        sns.heatmap(df_cm, annot=True, fmt="g").set_title(title)

    def plot_dim_red(self, model, features, labels, user_ids, n_components=2):
        index = 0
        new_fet = []
        new_label = []
        for row in labels:
            if row in user_ids:
                new_fet.append(features[index].A[0])
                new_label.append(row)
            index += 1

        category_names = {}
        for row in new_label:
            category_names[str(row)] = str(row) + " user"

        # Creation of the model
        if model == 'SVD':
            mod = TruncatedSVD(n_components=n_components,
                               n_iter=10,
                               random_state=3)
            title = "SVD decomposition"  # for the plot
        elif model == 'PCA':
            mod = PCA(n_components=n_components)
            title = "PCA decomposition"
        else:
            return "Error"

        # Fit and transform the features
        principal_components = mod.fit_transform(new_fet)

        # Put them into a dataframe
        df_features = pd.DataFrame(data=principal_components,
                                   columns=['PC1', 'PC2'])

        # Now we have to paste each row's label and its meaning
        # Convert labels array to df
        df_labels = pd.DataFrame(data=new_label,
                                 columns=['label'])

        df_full = pd.concat([df_features, df_labels], axis=1)
        df_full['label'] = df_full['label'].astype(str)

        # Get labels name

        # And map labels
        df_full['label_name'] = df_full['label']
        df_full = df_full.replace({'label_name': category_names})

        # Plot
        plt.figure(figsize=(10, 10))
        sns.scatterplot(x='PC1',
                        y='PC2',
                        hue="label_name",
                        data=df_full,
                        alpha=.7).set_title(title)

    @staticmethod
    def plot_bar_from_counter(counter, ax=None):
        if ax is None:
            fig = plt.figure()
            ax = fig.add_subplot(111)

        frequencies = counter.values()
        names = list(counter.keys())

        x_coordinates = np.arange(len(counter))
        ax.bar(x_coordinates, frequencies, align='center')

        ax.xaxis.set_major_locator(plt.FixedLocator(x_coordinates))
        ax.xaxis.set_major_formatter(plt.FixedFormatter(names))
        plt.show()

    @staticmethod
    def calculate_hit_rate(labels, results, top_n):
        hits = 0
        place_of_hit = {}
        counter = 0
        for row in results:
            for i, j in row.iterrows():
                has_hit = False
                place_counter = 1
                for x in range(0, top_n):
                    user_id = row.columns.values[x]
                    if labels[counter] == user_id:
                        hits += 1
                        place_of_hit[user_id] = place_counter
                        has_hit = True
                    place_counter += 1
                if not has_hit:
                    t = 0
            counter += 1
        return place_of_hit
