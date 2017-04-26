export class User{
    twitterHandle: string;
    years: number;
    days: number;
    imagePath: string;
    hourlytweeting:Array<number>;
    retweetsPerTweet: number;
    likesPerTweet: number;

    constructor(handle:string,anos:number,dias:number,path:string)
    {
        this.twitterHandle = handle;
        this.days = dias;
        this.years = anos;
        this.imagePath = path;
        this.hourlytweeting = [35,6,2,8,10,5,20,3,8,12,50,51,64];
        this.retweetsPerTweet = 340;
        this.likesPerTweet = 58;
    }
    getUser() : User {
        return this;
    }

    getHandle():string{
        return this.twitterHandle;
    }

    getRetweetsPerTweet():number{
        return this.retweetsPerTweet
    }

    getHourlytweeting():number[]{
        return this.hourlytweeting;
    }

    getDays():number{
        return this.days;
    }

    getYears():number{
        return this.years;
    }
}