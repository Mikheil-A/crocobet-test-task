import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  userPosts: object[];


  constructor(private _router: Router,
              private _httpClient: HttpClient) {
  }

  ngOnInit() {
    this._fetchUserPosts();
  }


  private get _getUserIdFromUrl(): number {
    const activatedUrl = this._router.url;
    const activatedUrlFragments = activatedUrl.split('/');
    const userId = parseInt(activatedUrlFragments[activatedUrlFragments.length - 1], 10);
    return userId;
  }

  private _fetchUserPosts() {
    this._httpClient.get(`https://jsonplaceholder.typicode.com/posts?userId=${this._getUserIdFromUrl}`).subscribe((res: object[]) => {
      this.userPosts = res;
      console.log(this.userPosts);
    });
  }
}
