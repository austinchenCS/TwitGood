#!/usr/bin/python

import tweepy
import KEYS
import sys
import json
import time

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
    tweets = tweepy.Cursor(api.user_timeline, screen_name = user_handle).items()

    # list of tuples: (tweet, day, hour)
    time_data = []
    top_liked_tweet = []
    top_retweeted_tweet = []
    top_successful_tweet = []
    account_age = 0



    # GET ALL DAILY AND HOURLY TIME DATA
    for tweet in tweets:
        time_data.append((tweet._json, tweet._json['created_at'][:3].lower(), tweet._json['created_at'][11:13]))


    for i in time_data:
        print(i[1], i[2])

    print("done")

if __name__ == "__main__": main()
