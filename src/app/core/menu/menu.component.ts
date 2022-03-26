import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public isMenuCollapsed = true;
  user?: User = undefined

  constructor(private systemService: SystemService) { }

  ngOnInit(): void {
    this.systemService.user$.subscribe(
      user => {
        this.user = user
      },
      error => console.log(error)
    )
  }
}
