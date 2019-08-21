import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: object;


  constructor() {
  }

  ngOnInit() {
    this.user = window.history.state.userInfo;
    console.log(this.user);
  }
}
