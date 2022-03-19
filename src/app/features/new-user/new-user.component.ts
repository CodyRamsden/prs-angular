import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.user)
  }

  createUser() {
    console.log(this.user)
    this.userService.createUser(this.user) .subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/user/list')
      },
      error => console.log(error)
    )
  }

}

