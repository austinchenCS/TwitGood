import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from './user';
import { UserData } from './user-data';

@Injectable()
export class UserRepository {
	private _apiUrl = 'https://private-17592-twitgood.apiary-mock.com/user';

	constructor(private http: Http) {}

	getUserData(handle:string){
		let apiUrl = 'https://private-09ea1-twitgood.apiary-mock.com/user/'+handle;

		return this.http.get(apiUrl).map(
			(res) => res.json()
		);
	}
	
	// add(user: User) : Promise<User>{
	// 	return this.http
	// 		.post(this._apiUrl, user)
	// 		.toPromise()
	// 		.then(x => x.json().data as User)
	// 		.catch(x => x.message);
	// }
	
	// update(user: User) : Promise<User>{
	// 	return this.http
	// 		.put(`${this._apiUrl}/${user.twitterHandle}`, user)
	// 		.toPromise()
	// 		.then(() => user)
	// 		.catch(x => x.message);
	// }

	// delete(user: User) : Promise<void>{
	// 	return this.http
	// 		.delete(`${this._apiUrl}/${user.twitterHandle}`)
	// 		.toPromise()
	// 		.catch(x => x.message);
	// }
}