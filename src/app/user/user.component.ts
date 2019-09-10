import { Component, OnInit } from "@angular/core";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  // decalting the variables
  usersArray: object = [];

  // getting the UsersService and assigning to the userService variable
  constructor(private userService: UsersService) {}

  ngOnInit() {
    // console.log(this.usersArray);
    this.userService.getUsers().subscribe(userService => {
      this.usersArray = userService;
      console.log(this.usersArray);
    });
  }
}
