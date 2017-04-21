#!/usr/bin/python

import tweepy
import KEYS

consumer_key = KEYS.get_consumer_key()
consumer_secret = KEYS.get_consumer_secret()

access_token = KEYS.get_access_token()
access_token_secret = KEYS.get_access_token_secret()

def main():
    #authorizes
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    api = tweepy.API(auth)

    query = "nba"
    tweets = tweepy.Cursor(api.search, q = query).items()
    for tweet in tweets:
        print tweet.text

    print("hello world")


if __name__ == "__main__": main()
