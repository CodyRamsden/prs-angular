import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
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
  ngbDate: NgbDate = new NgbDate(0, 0, 0);

  constructor(private systemService: SystemService, private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    if (this.systemService.loggedInUser != undefined)
    this.request.user = this.systemService.loggedInUser
  }

  createRequest() {
    let date = new Date(this.ngbDate.year, this.ngbDate.month -1, this.ngbDate.day)
    this.request.dateNeeded = date;
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
