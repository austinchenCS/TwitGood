import { Component } from '@angular/core';
import { User } from '../api/user';

@Component({
    moduleId: module.id,
    selector: 'account-statistics',
    templateUrl: 'account-statistics.component.html',
    styleUrls: [ 'account-statistics.component.css' ]
})

export class AccountStatisticsComponent{
    user: User = new User("@johndoe",3,316,"../../images/Profile\ Picture.png");
}