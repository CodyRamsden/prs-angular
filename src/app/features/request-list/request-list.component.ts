import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Request } from 'src/app/models/request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = []

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getAll().subscribe(
      data => {
        this.requests = data
      },
        error => {  }
    )
  }

}
