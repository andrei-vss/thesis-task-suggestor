import pandas as pd
from collections import Counter
import numpy as np

class DataGenerator:

    def __init__(self):
        self.data = pd.read_csv('data/issues.csv')
        self.user_map = self.get_user_map()

    def get_user_map(self):
        result = dict()
        internal_id = 0

        for issue in self.data.values:
            issue_owner = issue[0]
            if issue_owner not in result:
                result[issue_owner] = internal_id
                internal_id += 1

        return result

    def get_issue_data(self, bring_description=False):
        result = []
        for issue in self.data.values:
            issue_owner = issue[0]
            issue_title = issue[1]
            issue_description = issue[2]
            if bring_description:
                result.append([self.user_map[issue_owner], issue_title, issue_description])
            else:
                result.append([self.user_map[issue_owner], issue_title])

        return result