import { Component, OnInit } from '@angular/core';
// import service and model
import { UserService } from './../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor( private userService: UserService) {}

  //getUsers return observable that we need to subscribe to.
  ngOnInit() {
    this.userService.getUsers().subscribe(users => 
      this.users = users);
  }

}
