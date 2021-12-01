import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged(){
    this.userService.getUser().subscribe(user => {
      console.log(user);
    })
  }
}
