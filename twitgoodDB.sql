CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `twitter_handle` varchar(50) NOT NULL,
  `api_key` varchar(50),
  `api_secret` varchar(50), 
  `created_at` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
ALTER TABLE `Users` DROP PRIMARY KEY, ADD PRIMARY KEY(`user_id`);
ALTER TABLE `Users` MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `Logins` (
  `user_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `os` varchar(10) NOT NULL,
  `ip` varchar(15) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1; 

ALTER TABLE `Logins` ADD PRIMARY KEY(`user_id`, `time`);
ALTER TABLE `Logins` ADD FOREIGN KEY (`user_id`) REFERENCES `Users`(`user_id`); 

CREATE TABLE IF NOT EXISTS `ViewEngagement` (
  `user_id` int(11) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `view_name` varchar(20) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `ViewEngagement` ADD PRIMARY KEY(`user_id`, `time`);
ALTER TABLE `ViewEngagement` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);  

CREATE TABLE IF NOT EXISTS `TweetData` (
  `user_id` int(11) NOT NULL,
  `top_tweet` varchar(150) NOT NULL,
  `account_age` varchar(15) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `TweetData` ADD PRIMARY KEY(`user_id`);
ALTER TABLE `TweetData` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`); 

CREATE TABLE IF NOT EXISTS `HourlyData` (
  `user_id` int(11) NOT NULL,
  `hour` int(2) NOT NULL,
  `activity` int(5) NOT NULL,
  `success` int(6) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `HourlyData` ADD PRIMARY KEY(`user_id`, `hour`);
ALTER TABLE `HourlyData` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`); 

CREATE TABLE IF NOT EXISTS `WeeklyData` (
  `user_id` int(11) NOT NULL,
  `day` int(1) NOT NULL,
  `activity` int(5) NOT NULL,
  `success` int(6) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `WeeklyData` ADD PRIMARY KEY(`user_id`, `day`);
ALTER TABLE `WeeklyData` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);

CREATE TABLE IF NOT EXISTS `TopWords` (
  `user_id` int(11) NOT NULL,
  `rank` int(2) NOT NULL,
  `word` varchar(20) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `TopWords` ADD PRIMARY KEY(`user_id`, `rank`);
ALTER TABLE `TopWords` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);

CREATE TABLE IF NOT EXISTS `TopHashtags` (
  `user_id` int(11) NOT NULL,
  `rank` int(2) NOT NULL,
  `hashtag` varchar(20) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `TopHashtags` ADD PRIMARY KEY(`user_id`, `rank`);
ALTER TABLE `TopHashtags` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);

