import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ActivityComponent } from "./user/activity/activity.component";
import { InfoComponent } from "./user/info/info.component";
import { PostsComponent } from "./user/posts/posts.component";
import { UserComponent } from "./user/user.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";

const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "activity", component: ActivityComponent },
  { path: "info", component: InfoComponent },
  { path: "posts", component: PostsComponent },
  { path: "employee-detail", component: EmployeeDetailComponent },
  { path: "employee-list", component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
