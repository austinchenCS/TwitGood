INSERT INTO `TopHashtags` (`user_id`, `rank`, `hashtag`, `created`)
VALUES ('7', '00', 'synergy', NOW()), ('7', '01', 'marketing', NOW()),
('7', '02', 'seo', NOW()), ('7', '03', 'supercallifragilisticexpiallodocius', NOW()),
('7', '04', 'good', NOW());

INSERT INTO `TopWords` (`user_id`, `rank`, `word`, `created`)
VALUES ('7', '00', 'supercallifragilisticexpiallodocius', NOW()), ('7', '01', 'puppy', NOW()),
('7', '02', 'love', NOW()), ('7', '03', 'dog', NOW()),
('7', '04', 'good', NOW());

INSERT INTO `WeeklyData` (`user_id`, `day`, `activity`, `success`, `created`)
VALUES ('7', '0', '120', '800', NOW()), ('7', '1', '130', '600', NOW()),
('7', '2', '70', '1000', NOW()), ('7', '3', '120', '29100', NOW()),
('7', '4', '0', '0', NOW()), ('7', '5', '150', '900', NOW()),
('7', '6', '200', '850', NOW());

INSERT INTO `HourlyData` (`user_id`, `hour`, `activity`, `success`, `created`)
VALUES ('7', '00', '0', '3', NOW()), ('7', '01', '0', '2', NOW()),
('7', '02', '0', '0', NOW()), ('7', '03', '0', '1', NOW()),
('7', '04', '0', '18', NOW()), ('7', '05', '0', '3', NOW()),
('7', '06', '0', '2', NOW()), ('7', '07', '1', '3', NOW()),
('7', '08', '3', '5', NOW()), ('7', '09', '2', '6', NOW()),
('7', '10', '0', '9', NOW()), ('7', '11', '5', '20', NOW()),
('7', '12', '6', '21', NOW()), ('7', '13', '4', '31', NOW()),
('7', '14', '18', '68', NOW()), ('7', '15', '6', '196', NOW()),
('7', '16', '3', '82', NOW()), ('7', '17', '1', '20', NOW()),
('7', '18', '12', '5', NOW()), ('7', '19', '13', '8', NOW()),
('7', '20', '33', '25', NOW()), ('7', '21', '4', '41', NOW()),
('7', '22', '6', '5', NOW()), ('7', '23', '5', '10', NOW());


INSERT INTO `TweetData` (`user_id`, `top_faved`, `top_rted`, `top_success`, `account_age`, `tweets_positive`, `created`)
VALUES ("7", "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">I'm gonna start a kickstarter to make stargirl interlude a full song</p>— elias (@eliasqz) <a href=\"https://twitter.com/eliasqz/status/824715844685037568\">January 26, 2017</a></blockquote> <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",
    "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">some people claim Persona 5 isn’t trans representation but i beg to differ <a href=\"https://t.co/fPM2KLtUQX\">pic.twitter.com/fPM2KLtUQX</a></p>&mdash; eden  (@fontiago) <a href=\"https://twitter.com/fontiago/status/851193138156883968\">April 9, 2017</a></blockquote><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",
    "<blockquote class=\"twitter-tweet\"><p lang=\"en\" dir=\"ltr\">some people claim Persona 5 isn’t trans representation but i beg to differ <a href=\"https://t.co/fPM2KLtUQX\">pic.twitter.com/fPM2KLtUQX</a></p>&mdash; eden  (@fontiago) <a href=\"https://twitter.com/fontiago/status/851193138156883968\">April 9, 2017</a></blockquote><script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>",
   "3 months, 2 days", "58.23", NOW());
