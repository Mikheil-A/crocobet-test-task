import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: object[];


  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._httpClient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: object[]) => {
      this.users = res;
    });
  }
}
