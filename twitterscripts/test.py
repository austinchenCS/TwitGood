#!/usr/bin/python

import tweepy

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
