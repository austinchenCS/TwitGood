import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from './user';
import { UserData } from './user-data';

@Injectable()
export class UserRepository {
	private _apiUrl = 'https://private-09ea1-twitgood.apiary-mock.com/user/';
	private user : string;
	private loggedIn : boolean = false;
	private created : boolean;

	constructor(private http1: Http,private http2: Http) {}

	getUserData(handle:string){
		let apiUrl = 'http://35.164.145.233/TwitGood/backend/public/user/'+handle;

		return this.http1.get(apiUrl).map(
			(res) => res.json()
		);
	}
	getTweet(tweetLink:string){
		let tweetUrl = 'https://publish.twitter.com/oembed?url='+tweetLink;

		return this.http2.get(tweetUrl).map(
			(res) => res.json()
		);
	}

	setUser(user : string, created : boolean) : void{
		this.user = user;
		this.loggedIn = true;
		this.created = created;
	}

	logout() : void{
		this.user = null;
		this.loggedIn = false;
	}

	getLoginStatus() : boolean{
		return this.loggedIn;
	}

	getUser() : string{
		return this.user;
	}

	getCreated() : boolean{
		return this.created;
	}

}