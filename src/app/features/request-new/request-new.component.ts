import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Request } from 'src/app/models/request.model';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-request-new',
  templateUrl: './request-new.component.html',
  styleUrls: ['./request-new.component.css']
})
export class RequestNewComponent implements OnInit {
  request: Request = new Request()
  errors: string = "";

  constructor(private systemService: SystemService, private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    if (this.systemService.loggedInUser != undefined)
    this.request.user = this.systemService.loggedInUser
  }

  createRequest() {
    console.log(this.request)
    this.requestService.createRequest(this.request) .subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/request/list')
      },
      error => console.log(error)
    )
  }

}
