import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: object;


  constructor(private _router: Router) {
  }

  ngOnInit() {
    this.user = window.history.state.userInfo;

    if (!this.user) {
      this._router.navigate(['']);
    }
  }
}
