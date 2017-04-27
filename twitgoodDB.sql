CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `twitter_handle` varchar(50) NOT NULL,
  `api_key` varchar(50) NOT NULL,
  `api_secret` varchar(50) NOT NULL, 
  `profile_image` varchar(150) NOT NULL,
  `created_at` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
ALTER TABLE `Users` DROP PRIMARY KEY;
ALTER TABLE `Users` ADD PRIMARY KEY(`user_id`);
ALTER TABLE `Users` MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `Users` (`email`, `first_name`, `password`, `twitter_handle`, `api_key`, `api_secret`, `profile_image`, `created_at`)
VALUES ('one@gmail.gov', 'Jerry Knowles', 'password', 'jknowles', '82329847298432', '23974142397 12834792374', 'url hey', NOW()),
('two@gmail.gov', 'Jenny', 'password', 'j_malo', '82329847298432', '23974142397 12834792374', 'url hey', NOW()),
('three@gmail.gov', 'gargomel', 'password', 'i_got_truth', '82329847298432', '23974142397 12834792374', 'url hey', NOW()),
('four@gmail.gov', 'It me', 'password', 'fentibego', '82329847298432', '23974142397 12834792374', 'url hey', NOW()),
('five@gmail.gov', 'Garnet', 'password', 'garnet_love_time', '82329847298432', '23974142397 12834792374', 'url hey',  NOW()),
('six@gmail.gov', 'XMentosFan2012X', 'password', 'xmentosfan2012x', '82329847298432', '23974142397 12834792374', 'url hey', NOW());

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
  `top_faved` varchar(150) NOT NULL,
  `top_rted` varchar(150) NOT NULL,
  `top_success` varchar(150) NOT NULL,
  `account_age` varchar(150) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `TweetData` ADD PRIMARY KEY(`user_id`);
ALTER TABLE `TweetData` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);

INSERT INTO `TweetData` (`user_id`, `top_faved`, `top_rted`, `top_success`, `account_age`, `created`)
VALUES ('1', 'url1','url2','url3','3 months, 2 days', NOW()),
('4', 'url1','url2','url3','5 days', NOW()),
('2', 'url1','url2','url3','1 day', NOW()),
('3', 'Great website.','fj','ksjfls','10 years, 12 months, 30 days', NOW()),
('5', 'Big fan of the blue bird website that I\'m on!','x','y','5 years',NOW()),
('6', 'This is also *my* top tweet.','orjt','ayyy','2 years, 1 day', NOW());

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

INSERT INTO `HourlyData` (`user_id`, `hour`, `activity`, `success`, `created`)
VALUES ('3', '00', '0', '3', NOW()), ('3', '01', '0', '2', NOW()),
('3', '02', '0', '0', NOW()), ('3', '03', '0', '1', NOW()),
('3', '04', '0', '18', NOW()), ('3', '05', '0', '3', NOW()),
('3', '06', '0', '2', NOW()), ('3', '07', '1', '3', NOW()),
('3', '08', '3', '5', NOW()), ('3', '09', '2', '6', NOW()),
('3', '10', '0', '9', NOW()), ('3', '11', '5', '20', NOW()),
('3', '12', '6', '21', NOW()), ('3', '13', '4', '31', NOW()),
('3', '14', '18', '68', NOW()), ('3', '15', '6', '196', NOW()),
('3', '16', '3', '82', NOW()), ('3', '17', '1', '20', NOW()),
('3', '18', '12', '5', NOW()), ('3', '19', '13', '8', NOW()),
('3', '20', '33', '25', NOW()), ('3', '21', '4', '41', NOW()),
('3', '22', '6', '5', NOW()), ('3', '23', '5', '10', NOW());

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

INSERT INTO `WeeklyData` (`user_id`, `day`, `activity`, `success`, `created`)
VALUES ('3', '0', '120', '800', NOW()), ('3', '1', '130', '600', NOW()),
('3', '2', '70', '1000', NOW()), ('3', '3', '120', '29100', NOW()),
('3', '4', '0', '0', NOW()), ('3', '5', '150', '900', NOW()),
('3', '6', '200', '850', NOW());

CREATE TABLE IF NOT EXISTS `TopWords` (
  `user_id` int(11) NOT NULL,
  `rank` int(2) NOT NULL,
  `word` varchar(140) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `TopWords` ADD PRIMARY KEY(`user_id`, `rank`);
ALTER TABLE `TopWords` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);

INSERT INTO `TopWords` (`user_id`, `rank`, `word`, `created`)
VALUES ('3', '00', 'supercallifragilisticexpiallodocius', NOW()), ('3', '01', 'puppy', NOW()),
('3', '02', 'love', NOW()), ('3', '03', 'dog', NOW()),
('3', '04', 'good', NOW());

CREATE TABLE IF NOT EXISTS `TopHashtags` (
  `user_id` int(11) NOT NULL,
  `rank` int(2) NOT NULL,
  `hashtag` varchar(100) NOT NULL,
  `created` timestamp NOT NULL,
  `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `TopHashtags` ADD PRIMARY KEY(`user_id`, `rank`);
ALTER TABLE `TopHashtags` ADD FOREIGN KEY(`user_id`) REFERENCES `Users`(`user_id`);

INSERT INTO `TopHashtags` (`user_id`, `rank`, `hashtag`, `created`)
VALUES ('3', '00', 'synergy', NOW()), ('3', '01', 'marketing', NOW()),
('3', '02', 'seo', NOW()), ('3', '03', 'supercallifragilisticexpiallodocius', NOW()),
('3', '04', 'good', NOW());
