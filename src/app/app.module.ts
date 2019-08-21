// modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

// components
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserPostsComponent } from './user-posts/user-posts.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
