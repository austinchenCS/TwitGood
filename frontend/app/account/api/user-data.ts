export class UserData{
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

    constructor(){
        this.hourlysuccess = new Array<number>();
        this.hourlyactivity= new Array<number>();
        this.weeklyactivity= new Array<number>();
        this.weeklysuccess= new Array<number>();
        this.tophashtags = new Array<string>();
        this.topwords = new Array<string>();
        this.top_favorited_tweet ="";
        this.top_retweeted_tweet = "";
        this.top_successful_tweet = "";
        this.accountage = "";
    }
    // constructor(){

    // }
}