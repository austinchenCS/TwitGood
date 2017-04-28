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

    constructor(handle: string)
    {
        this.twitterHandle = handle;
        // this.days = dias;
        // this.years = anos;
        // this.imagePath = path;
        // this.hourlyactivity = [35,6,2,8,10,5,20,3,8,12,50,51,64];
        // this.retweetsPerTweet = 340;
        // this.likesPerTweet = 58;
    }
    getUser() : User {
        return this;
    }

    getHandle():string{
        return this.twitterHandle;
    }
}