#!/usr/bin/python
DEBUG = True
DEMO = True

import re
import csv
import tweepy
import KEYS
import sys
import json
import time
import nltk
from nltk.corpus import stopwords
from operator import itemgetter
from collections import Counter
from string import punctuation
from mymodels import *
from analyze_polarity import learn_tweet_polarity
from dateutil.relativedelta import relativedelta
import datetime

#import requests.packages.urllib3
#requests.packages.urllib3.disable_warnings()

consumer_key = KEYS.get_consumer_key()
consumer_secret = KEYS.get_consumer_secret()

access_token = KEYS.get_access_token()
access_token_secret = KEYS.get_access_token_secret()

# For now, only takes into account central time.
def convertUTC( time_tuple ):
    days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]

    day_index = days.index(str(time_tuple[0]))
    hour = int(time_tuple[1])

    # Offset for Dallas time
    hour -= 5

    if hour < 0:
        day_index -= 1
        hour += 24

    formatted_dt = (str(days[day_index]), str(hour))
    return formatted_dt

# Main analysis
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

    # time_data is a list of tuples (tweet_link, day, hour, success)
    time_data = []
    hourly_activity = {}
    weekly_activity = {"sun": 0, "mon": 0, "tue": 0, "wed": 0, "thu": 0, "fri": 0, "sat": 0}
    hourly_success = {}
    weekly_success = {"sun": 0, "mon": 0, "tue": 0, "wed": 0, "thu": 0, "fri": 0, "sat": 0}

    # list of tuples for tweets
    # format: (tweet_url, retweets)
    top_favorited_tweet = []
    top_retweeted_tweet = []
    top_successful_tweet = []

    # account age (IN DAYS)
    account_age = ""

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

        # build URL of current tweet
        curr_url = "https://twitter.com/twitgood/status/" + tweet._json['id_str']

        tweet_count += 1

        # Format time stamp
        time_tup = ( tweet._json['created_at'][:3].lower(), tweet._json['created_at'][11:13] )
        new_time = convertUTC(time_tup)

        # get top tweets
        curr_fav = int(tweet._json['favorite_count'])
        curr_rt = int(tweet._json['retweet_count'])
        curr_success = curr_fav + curr_rt
        top_favorited_tweet.append((curr_url, curr_fav))
        top_retweeted_tweet.append((curr_url, curr_rt))
        top_successful_tweet.append((curr_url, curr_success))

        # build tuple
        time_data.append((curr_url, new_time[0], new_time[1], str(curr_success)))

        # get hashtags
        curr_hashtags = tweet._json['entities']['hashtags']
        for entry in curr_hashtags:
            if re.search('\W+', entry['text']) is None:
                all_hashtags.append(entry['text'])

        # get all words
        all_words.append(tweet._json['text'])

    # Get activity per hour and day
    for data in time_data:
        weekly_activity[str(data[1])] += 1
        weekly_success[str(data[1])] += int(data[3])

        if int(data[2]) not in hourly_activity:
            hourly_activity[int(data[2])] = 0

        else:
            hourly_activity[int(data[2])] += 1

        if int(data[2]) not in hourly_success:
            hourly_success[int(data[2])] = 0

        else:
            hourly_success[int(data[2])] += int(data[3])


    # Get average success per hour and day
    for key in weekly_success:
        divide = weekly_activity[key]
        if divide == 0:
            divide += 1

        weekly_success[key] = round((float(weekly_success[key]) / float(divide)), 2)

    for key in hourly_success:
        divide = hourly_activity[key]
        if divide == 0:
            divide += 1

        hourly_success[key] = round((float(hourly_success[key]) / float(divide)), 2)


    # Get top tweets
    top_favorited_tweet = sorted(top_favorited_tweet, key=itemgetter(1), reverse=True)
    top_retweeted_tweet = sorted(top_retweeted_tweet, key=itemgetter(1), reverse=True)
    top_successful_tweet = sorted(top_successful_tweet, key=itemgetter(1), reverse=True)

    # Get profile pic
    profile_pic = str(user_data.profile_image_url_https)
    profile_pic = profile_pic.replace("_normal", "")

    # Calculate account age
    date_created = str(user_data.created_at)
    year_created = int(date_created[0:4])
    month_created = int(date_created[5:7])
    day_created = int(date_created[8:10])

    date_created = datetime.date(year_created, month_created, day_created)
    today = datetime.datetime.now().date()

    rdelta = relativedelta(today, date_created)
    years = int(rdelta.years)
    months = int(rdelta.months)
    days = int(rdelta.days)

    account_age += str(years) + " years, " + str(months) + " months, " + str(days) + " days"

    # Get most frequent hashtags
    word_counter = {}
    for word in all_hashtags:
        if word in word_counter:
            word_counter[word] += 1
        else:
            word_counter[word] = 1

    popular_words = sorted(word_counter, key = word_counter.get, reverse = True)
    most_frequent_hashtags = popular_words[:3]

    # Get most frequent words
    stopwords = set(nltk.corpus.stopwords.words('english'))
    with_stopwords = Counter()
    for tweet in all_words:
        split = tweet.split()
        with_stopwords.update(w.lower().rstrip(punctuation) for w in split if w.lower() not in stopwords)

    word_counter = 0
    for x in with_stopwords.most_common(11):
        if word_counter == 5:
            break
        if x[0] != '' and x[0] != '&amp' and re.search(r'@\w+', x[0]) is None and re.search(r'[^a-zA-Z0-9]+', x[0]) is None:
            word_counter += 1
            most_frequent_words.append((str(x[0].encode('utf-8')), int(x[1])))

    # Analyze tweet polarity with machine learning
    with open('all_tweets.csv', 'wb') as my_csv_file:
        the_data_writer = csv.writer(my_csv_file, delimiter=',')
        label = ("tweets", " ")
        the_data_writer.writerow(label)
        for tweet in all_words:
            the_data_writer.writerow([str(tweet.encode('utf-8'))])

    tweet_polarity_split = learn_tweet_polarity()


###############################################################################
########## DEBUG ##############################################################
###############################################################################

    if DEBUG:
        # PRINT OUT DATA
        print("#####################################################################################")
        print("\nTwitter Handle: @" + user_handle)
        print("\nProfile Pic: " + profile_pic)
        print("\nTime Zone: " + str(user_data.utc_offset))
        print("Account age: Your account is " + account_age + " old.\n")
        print("Top 3 Favorited Tweets: ")
        for i in range(0, 3):
            print("\t" + str(i + 1) + ". " + str(top_favorited_tweet[i][0]) + " Favorites: " + str(top_favorited_tweet[i][1]))
        print("\nTop 3 Retweeted Tweets: ")
        for i in range(0, 3):
            print("\t" + str(i + 1) + ". " + str(top_retweeted_tweet[i][0]) + " Retweets: " + str(top_retweeted_tweet[i][1]))
        print("\nTop 3 Successful Tweets: ")
        for i in range(0, 3):
            print("\t" + str(i + 1) + ". " + str(top_successful_tweet[i][0]) + " Success: " + str(top_successful_tweet[i][1]))

        print("\nTweet volume per day: ")
        for key in weekly_activity:
            print(" " + key + ": " + str(weekly_activity[key]))

        print("\nTweet volume per hour: ")
        for key in hourly_activity:
            print(" " + str(key) + ": " + str(hourly_activity[key]))

        print("\nTweet success per day: ")
        for key in weekly_success:
            print(" " + key + ": " + str(weekly_success[key]))

        print("\nTweet success per hour: ")
        for key in hourly_success:
            print(" " + str(key) + ": " + str(hourly_success[key]))

        print("\nMost frequent words: ")
        for i in range(0, 5):
            print(str(i + 1) + ". " + str(most_frequent_words[i][0]))

        print("\nMost frequent hashtags: " )
        for i in range(0, 3):
            print(str(i + 1) + ". " + str(most_frequent_hashtags[i]))

        print("\nPolarity split of tweets: ")
        print("   Positive: " + str(round((tweet_polarity_split[0] * 100), 2)) + "%")
        print("   Negative: " + str(round((tweet_polarity_split[1] * 100), 2)) + "%")

        print(top_favorited_tweet[0][0])
        print(top_retweeted_tweet[0][0])
        print(top_successful_tweet[0][0])
        print(account_age)

    	print("\n#####################################################################################")

###############################################################################
######### /DEBUG ##############################################################
###############################################################################


###############################################################################
########## SQL INSERTION ######################################################
###############################################################################

    if not DEMO:
        users = Users.get(Users.twitter_handle == sys.argv[1])
        new_tweetdata = Tweetdata(user_id = users.user, top_faved = top_favorited_tweet[0][0], top_rted = top_retweeted_tweet[0][0], top_success = top_successful_tweet[0][0], account_age = account_age, created = datetime.datetime.now())
        new_tweetdata.save()

	for i in range(len(most_frequent_words)):
            Topwords.create(user_id = users.user, rank = (i + 1), word = most_frequent_words[i][0], created = datetime.datetime.now()).save()

###############################################################################
######### /SQL INSERTION ######################################################
###############################################################################
if __name__ == "__main__": main()
