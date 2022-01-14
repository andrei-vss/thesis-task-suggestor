import pandas as pd
from sklearn.utils import shuffle

class RMDataGrabber:

    def __init__(self, bring_description=False):
        self.bring_description = bring_description

    def get_issue_data(self):
        result = []
        data = pd.read_csv('data/issues.csv', sep="\t")
        dist = {}
        for issue in data.values:
            issue_owner_id = issue[0]
            issue_title = issue[1]
            issue_description = issue[2]
            if issue_owner_id in dist:
                dist[issue_owner_id] += 1
            else:
                dist[issue_owner_id] = 1
            if self.bring_description:
                result.append([issue_owner_id, issue_title + ". " + str(issue_description)])
            else:
                result.append([issue_owner_id, issue_title])

        return result
