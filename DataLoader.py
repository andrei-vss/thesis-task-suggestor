import pandas as pd
from datetime import datetime as dt
from langdetect import detect
import numpy as np
import matplotlib.pylab as plt
from sklearn.preprocessing import LabelEncoder

class DataLoader:
    def __init__(self, path):
        self.path = path
        self.users = pd.read_csv(self.path + '/01_users.csv', sep='\t')
        self.issues = pd.read_csv(self.path + '/02_issues.csv', sep='\t')
        self.issueDescription = pd.read_csv(self.path + '/02_issues_description.csv', sep='\t').replace(np.nan, '',
                                                                                                        regex=True)
        self.resolvedStatus = pd.read_csv(self.path + '/02_issues_journal_status.csv', sep='\t')


    def get_active_user_to_issue_resolved(self, onlyEn=False, threshooldForUserIssues=0, country=None,
                                          fixDistribution=False, plot=True):
        usersRaw = self.users[self.users['status'] == 1]
        if country is not None:
            if country == 'ro':
                usersRaw = usersRaw[usersRaw['country'] == 2]
            elif country == 'nl':
                usersRaw = usersRaw[usersRaw['country'] == 1]
            else:
                print('Can`t find selected country in options')

        issueDescription = {}
        users = {}
        issues = self.issues
        resolvedStatus = self.resolvedStatus[self.resolvedStatus['prop_key'] == 'status_id']
        resolvedStatus = resolvedStatus[resolvedStatus['value'] == 3]

        for index, row in usersRaw.iterrows():
            users[row['id']] = row['NAME']

        for index, row in self.issueDescription.iterrows():
            issueDescription[row['id']] = row['description']

        issueToUserMap = {}
        for t in resolvedStatus.values:
            issueId = t[0]
            userId = t[4]
            modificationDate = t[5]
            if issueId not in issueToUserMap:
                issueToUserMap[issueId] = userId, modificationDate
            else:
                oldUserId, oldModificationDate = issueToUserMap[issueId]
                old = dt.strptime(oldModificationDate, '%Y-%m-%d %H:%M:%S')
                new = dt.strptime(modificationDate, '%Y-%m-%d %H:%M:%S')
                if new > old:
                    issueToUserMap[issueId] = userId, modificationDate

        userIssueCounter = {}
        result = []
        for t in issues.values:
            issueId = t[0]
            issueSubject = t[5]
            issueProject = t[3]
            description = ''
            if issueId in issueDescription:
                description = issueDescription[issueId]

            if issueId in issueToUserMap:
                userId, modificationDate = issueToUserMap[issueId]
                if userId in users:
                    result.append([issueId, issueSubject, userId,  description, users[userId], issueProject])
                    if userId in userIssueCounter:
                        userIssueCounter[userId] += 1
                    else:
                        userIssueCounter[userId] = 1


        if threshooldForUserIssues != 0:
            usersToRemove = set(t for t in userIssueCounter.keys() if userIssueCounter[t] < threshooldForUserIssues)
            result = [t for t in result if t[2] not in usersToRemove]

        if fixDistribution and threshooldForUserIssues > 20:
            min = 100000
            newResult = []
            for userId in userIssueCounter.keys():
                if userIssueCounter[userId] < min and userIssueCounter[userId] > threshooldForUserIssues:
                    min = userIssueCounter[userId]
            remainUsers = set([t[2] for t in result])
            for userId in remainUsers:
                usersTasks = [t for t in result if t[2] == userId]
                np.random.shuffle(usersTasks)
                newResult.extend(usersTasks[:min])
            result = newResult

        return result
