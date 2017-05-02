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

	constructor(private http1: Http,private http2: Http) {}

	getUserData(handle:string){
		let apiUrl = 'https://private-09ea1-twitgood.apiary-mock.com/user/'+handle;

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

	setUser(user : string) : void{
		this.user = user;
		this.loggedIn = true;
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

}