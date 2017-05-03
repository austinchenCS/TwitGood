from peewee import *

database = MySQLDatabase('Twitgood', **{'password': 'jJT89vEEjq', 'user': 'root'})

class UnknownField(object):
    def __init__(self, *_, **__): pass

class BaseModel(Model):
    class Meta:
        database = database

class Users(BaseModel):
    api_key = CharField(null=True)
    api_secret = CharField(null=True)
    created_at = DateTimeField()
    email = CharField()
    first_name = CharField(null=True)
    last_updated = DateTimeField()
    password = CharField()
    profile_image = CharField(null=True)
    twitter_handle = CharField()
    user = PrimaryKeyField(db_column='user_id')

    class Meta:
        db_table = 'Users'

class Hourlydata(BaseModel):
    activity = IntegerField()
    created = DateTimeField()
    hour = IntegerField()
    last_updated = DateTimeField()
    success = IntegerField()
    user = ForeignKeyField(db_column='user_id', rel_model=Users, to_field='user')

    class Meta:
        db_table = 'HourlyData'
        indexes = (
            (('user', 'hour'), True),
        )
        primary_key = CompositeKey('hour', 'user')

class Logins(BaseModel):
    ip = CharField()
    os = CharField()
    time = DateTimeField()
    user = ForeignKeyField(db_column='user_id', rel_model=Users, to_field='user')

    class Meta:
        db_table = 'Logins'
        indexes = (
            (('user', 'time'), True),
        )
        primary_key = CompositeKey('time', 'user')

class Tophashtags(BaseModel):
    created = DateTimeField()
    hashtag = CharField()
    last_updated = DateTimeField()
    rank = IntegerField()
    user = ForeignKeyField(db_column='user_id', rel_model=Users, to_field='user')

    class Meta:
        db_table = 'TopHashtags'
        indexes = (
            (('user', 'rank'), True),
        )
        primary_key = CompositeKey('rank', 'user')

class Topwords(BaseModel):
    created = DateTimeField()
    last_updated = DateTimeField()
    rank = IntegerField()
    user = ForeignKeyField(db_column='user_id', rel_model=Users, to_field='user')
    word = CharField()

    class Meta:
        db_table = 'TopWords'
        indexes = (
            (('user', 'rank'), True),
        )
        primary_key = CompositeKey('rank', 'user')

class Tweetdata(BaseModel):
    account_age = CharField()
    created = DateTimeField()
    last_updated = DateTimeField()
    top_faved = CharField()
    top_rted = CharField()
    top_success = CharField()
    tweets_positive = CharField()
    user = ForeignKeyField(db_column='user_id', primary_key=True, rel_model=Users, to_field='user')

    class Meta:
        db_table = 'TweetData'

class Viewengagement(BaseModel):
    time = DateTimeField()
    user = ForeignKeyField(db_column='user_id', rel_model=Users, to_field='user')
    view_name = CharField()

    class Meta:
        db_table = 'ViewEngagement'
        indexes = (
            (('user', 'time'), True),
        )
        primary_key = CompositeKey('time', 'user')

class Weeklydata(BaseModel):
    activity = IntegerField()
    created = DateTimeField()
    day = IntegerField()
    last_updated = DateTimeField()
    success = IntegerField()
    user = ForeignKeyField(db_column='user_id', rel_model=Users, to_field='user')

    class Meta:
        db_table = 'WeeklyData'
        indexes = (
            (('user', 'day'), True),
        )
        primary_key = CompositeKey('day', 'user')

