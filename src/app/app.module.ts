import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ActivityComponent } from "./user/activity/activity.component";
import { PostsComponent } from "./user/posts/posts.component";
import { InfoComponent } from "./user/info/info.component";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    PostsComponent,
    InfoComponent,
    UserComponent,
    EmployeeDetailComponent,
    EmployeeListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
