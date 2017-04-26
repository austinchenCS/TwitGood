import { Component } from '@angular/core';
import { User } from '../api/user';

@Component({
	moduleId: module.id,
  selector: 'account-summary',
  templateUrl: 'account-summary.component.html',
  styleUrls: [ 'account-summary.component.css' ]
})

export class AccountSummaryComponent{
    user: User = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");
}