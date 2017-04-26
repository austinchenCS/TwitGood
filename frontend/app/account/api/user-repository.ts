import { User } from './user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserRepository {
	private _apiUrl = 'http://polls.apiblueprint.org/user/';

	constructor(private http: Http) {}

	listAll() : Promise<User[]>{
		return this.http
			.get(this._apiUrl)
			.toPromise()
			.then(x => x.json().data as User[])
			.catch(x => x.message);
	}

	getById(id : number) : Promise<User>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as User)
			.catch(x => x.message);
	}
	
	add(user: User) : Promise<User>{
		return this.http
			.post(this._apiUrl, user)
			.toPromise()
			.then(x => x.json().data as User)
			.catch(x => x.message);
	}
	
	update(user: User) : Promise<User>{
		return this.http
			.put(`${this._apiUrl}/${user.twitterHandle}`, user)
			.toPromise()
			.then(() => user)
			.catch(x => x.message);
	}

	delete(user: User) : Promise<void>{
		return this.http
			.delete(`${this._apiUrl}/${user.twitterHandle}`)
			.toPromise()
			.catch(x => x.message);
	}
}

class userData{

}