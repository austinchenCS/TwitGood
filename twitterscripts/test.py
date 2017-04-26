#!/usr/bin/python

import re
import tweepy
import KEYS
import sys
import json
import time
import datetime
import nltk
from nltk.corpus import stopwords
from operator import itemgetter
from collections import Counter
from string import punctuation

import requests.packages.urllib3
requests.packages.urllib3.disable_warnings()

consumer_key = KEYS.get_consumer_key()
consumer_secret = KEYS.get_consumer_secret()

access_token = KEYS.get_access_token()
access_token_secret = KEYS.get_access_token_secret()

def main():
    # authorizes
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    # get user handle from command line
    user_handle = str(sys.argv[1])

    # get list of all tweets of a user
    tweets = list(tweepy.Cursor(api.user_timeline, screen_name = user_handle).items())

    # create user data thing
    user_data = api.get_user(screen_name = user_handle)

    # list of tuples: (tweet, day, hour)
    time_data = []

    # list of tuples for tweets
    # format: (tweet_url, likes, retweets)
    top_favorited_tweet = []
    top_retweeted_tweet = []
    top_successful_tweet = []

    # account age (IN DAYS)
    account_age = 0

    # list of frequent hashtags and words
    most_frequent_words = []
    most_frequent_hashtags = []

    # temp variables
    all_words = []
    all_hashtags = []

    tweet_count = 0
    rt_count = 0
    # GET ALL DAILY AND HOURLY TIME DATA
    for tweet in tweets:
        # Filter out retweets
        if hasattr(tweet, 'retweeted_status'):
            rt_count += 1
            continue

        tweet_count += 1
        time_data.append((tweet._json, tweet._json['created_at'][:3].lower(), tweet._json['created_at'][11:13]))

        # build URL of current tweet
        curr_url = "https://twitter.com/twitgood/status/" + tweet._json['id_str']

        # get top tweets
        curr_fav = int(tweet._json['favorite_count'])
        curr_rt = int(tweet._json['retweet_count'])
        curr_success = curr_fav + curr_rt
        top_favorited_tweet.append((curr_url, curr_fav))
        top_retweeted_tweet.append((curr_url, curr_rt))
        top_successful_tweet.append((curr_url, curr_success))

        # get hashtags
        curr_hashtags = tweet._json['entities']['hashtags']
        for entry in curr_hashtags:
            if re.search('\W+', entry['text']) is None:
                all_hashtags.append(entry['text'])

        # get all words
        all_words.append(tweet._json['text'])


    print(all_hashtags)
        # create fat list of all words


        #print("Favs: " + str(curr_fav) + " RT: " + str(curr_rt) + " Success: " + str(curr_success))

    # Get top tweets
    top_favorited_tweet = sorted(top_favorited_tweet, key=itemgetter(1), reverse=True)
    top_retweeted_tweet = sorted(top_retweeted_tweet, key=itemgetter(1), reverse=True)
    top_successful_tweet = sorted(top_successful_tweet, key=itemgetter(1), reverse=True)

    print(top_favorited_tweet[:3])
    print(top_retweeted_tweet[:3])
    print(top_successful_tweet[:3])

    # Calculate account age (IN DAYS)
    date_created = str(user_data.created_at)
    print(date_created)
    year_created = int(date_created[0:4])
    month_created = int(date_created[5:7])
    day_created = int(date_created[8:10])
    print(year_created)
    print(month_created)
    print(day_created)

    date_created = datetime.date(year_created, month_created, day_created)
    today = datetime.datetime.now().date()

    print(date_created)
    print(today)

    account_age = today - date_created
    account_age = int(account_age.days)

    print(account_age)

    # Get most frequent hashtags
    word_counter = {}
    for word in all_hashtags:
        if word in word_counter:
            word_counter[word] += 1
        else:
            word_counter[word] = 1

    popular_words = sorted(word_counter, key = word_counter.get, reverse = True)
    most_frequent_hashtags = popular_words[:3]

    print(most_frequent_hashtags)

    # Get most frequent words
    stopwords = set(nltk.corpus.stopwords.words('english'))
    with_stopwords = Counter()
    for tweet in all_words:
        split = tweet.split()
        with_stopwords.update(w.lower().rstrip(punctuation) for w in split if w.lower() in stopwords)

    for x in with_stopwords.most_common(5):
        print(x)


    print(tweet_count)
    print(rt_count)

    print("done")

if __name__ == "__main__": main()
