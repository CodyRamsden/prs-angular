import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isMenuCollapsed = true;
  loggedInUser: User = new User();

  constructor(private systemService: SystemService, private requestService: RequestService) { }

  user?: User = undefined

  ngOnInit(): void {
    this.user = this.systemService.loggedInUser
  }
  }
