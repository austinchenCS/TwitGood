export class User{
    top_favorited_tweet: string;
    top_retweeted_tweet: string;
    top_successful_tweet: string;
    hourlysuccess: number[];
	hourlyactivity: number[];
	weeklysuccess: number[];
	weeklyactivity: number[];
	accountage: string;
	tophashtags: string[];
	topwords: string[];
    twitterHandle: string;
    positive: number;

    constructor(handle: string)
    {
        this.twitterHandle = handle;
    }
    getUser() : User {
        return this;
    }

    getHandle():string{
        return this.twitterHandle;
    }
}