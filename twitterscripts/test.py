#!/usr/bin/python

import tweepy
import KEYS
import sys
import json
import time
from operator import itemgetter

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
    highest_favorited = 0
    highest_retweeted = 0
    highest_successful = 0
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

        curr_url = "https://twitter.com/BigSwede66/status/" + tweet._json['id_str']

        #print(curr_url)
        curr_fav = int(tweet._json['favorite_count'])
        curr_rt = int(tweet._json['retweet_count'])
        curr_success = curr_fav + curr_rt

        if curr_fav > highest_favorited:
            highest_favorited = curr_fav

        if curr_rt > highest_retweeted:
            highest_retweeted = curr_rt

        if curr_success > highest_successful:
            highest_successful = curr_success

        top_favorited_tweet.append((curr_url, curr_fav))
        top_retweeted_tweet.append((curr_url, curr_rt))
        top_successful_tweet.append((curr_url, curr_success))

        #print("Favs: " + str(curr_fav) + " RT: " + str(curr_rt) + " Success: " + str(curr_success))

    # Get top tweets
    top_favorited_tweet = sorted(top_favorited_tweet, key=itemgetter(1), reverse=True)
    top_retweeted_tweet = sorted(top_retweeted_tweet, key=itemgetter(1), reverse=True)
    top_successful_tweet = sorted(top_successful_tweet, key=itemgetter(1), reverse=True)

    print(top_favorited_tweet[:3])
    print(top_retweeted_tweet[:3])
    print(top_successful_tweet[:3])




    # Calculate account age (IN DAYS)

    # Get most frequent words

    # Get most frequent hashtags


    print(tweet_count)
    print(rt_count)

    print("done")

if __name__ == "__main__": main()
