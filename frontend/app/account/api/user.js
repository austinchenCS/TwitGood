"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(handle) {
        this.twitterHandle = handle;
        // this.days = dias;
        // this.years = anos;
        // this.imagePath = path;
        // this.hourlyactivity = [35,6,2,8,10,5,20,3,8,12,50,51,64];
        // this.retweetsPerTweet = 340;
        // this.likesPerTweet = 58;
    }
    getUser() {
        return this;
    }
    getHandle() {
        return this.twitterHandle;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map