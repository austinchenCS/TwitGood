#!/usr/bin/python

import csv
from operator import itemgetter

import pandas as pd

from sklearn import metrics

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression


def learn_tweet_polarity():
    training_data = pd.read_csv("/var/www/tweet_data.csv")
    training_data['polarity_num'] = training_data.polarity.map({'negative': 0, 'positive': 1})

    # Create matrices with data
    X = training_data.tweet
    y = training_data.polarity_num

    # now, we vectorize this dataset.
    vect = CountVectorizer()

    tweets_in = pd.read_csv("all_tweets.csv", error_bad_lines=False)
    XX = tweets_in.tweets

    # Transform the matrices into document-term matrices
    X_dtm = vect.fit_transform(X)
    XX_dtm = vect.transform(XX)

    # # Evaluate the data with the naive bayes model
    nb = MultinomialNB()

    # naive bayes with training data and training results
    nb.fit(X_dtm, y)

    # PREDICT THE RESULTS OF DATA (REDDIT COMMENTS)
    y_pred_class = nb.predict(XX_dtm)

    all_polarity = []

    for i in y_pred_class:
        all_polarity.append(int(i))

    all_polarity_english = []

    # Convert all sentiments values to english sentiments
    for polarity in all_polarity:
        if polarity is 0:
            all_polarity_english.append("negative")
        elif polarity is 1:
            all_polarity_english.append("positive")

    # Read from coments generate CSV results
    all_tweets = []

    with open('all_tweets.csv', 'rb') as csvfile:
        spamreader = csv.reader(csvfile)
        for row in spamreader:
            all_tweets.append(row[0])

    all_tweets.pop(0)

    ## Write all comments to a .csv file for analysis
    #with open('tweets_results.csv', 'wb') as my_csv_file:
    #    the_data_writer = csv.writer(my_csv_file, delimiter=',')
    #    label = ("tweets", "polarity")
    #    the_data_writer.writerow(label)
    #    counter = 0
    #    for tweet in all_tweets:
    #        row_temp = (tweet, all_polarity_english[counter])
    #        the_data_writer.writerow(row_temp)
    #        counter += 1

    foundNegative = False
    foundPositive = False
    # Calculate percentage of tweets that are positive or negative
    polarity_counter = {}
    for polarity in all_polarity_english:
        if polarity == "positive":
            foundPositive = True
        if polarity == "negative":
            foundNegative = True

        if polarity in polarity_counter:
            polarity_counter[polarity] += 1
        else:
            polarity_counter[polarity] = 1

    if foundNegative is False:
        polarity_counter["negative"] = 0
    if foundPositive is False:
        polarity_counter["positive"] = 0


    polarity_pct = {}

    for key in polarity_counter:
        polarity_pct[key] = float(float(polarity_counter[key]) / float(len(all_polarity_english)))

    # Returns positive/negative split of tweets
    split = (polarity_pct["positive"], polarity_pct["negative"])

    return split

