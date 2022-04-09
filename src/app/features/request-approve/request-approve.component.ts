import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Request } from 'src/app/models/request.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {
  requestId: number = 0
  request: Request = new Request
  lineItems: LineItem[] = []
  lineItem: LineItem = new LineItem()

  constructor(private lineItemService: LineItemService, private requestService: RequestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.requestId = params.id

        this.requestService.getById(this.requestId).subscribe(
          data => {
            if (data.length > 0) {
              this.request = data[0]

              this.lineItemService.getAllByRequest(this.request).subscribe(
                data => {
                  this.lineItems = data

                console.log(data)
                },
                error => console.log(error)
              )
            }
          },
          error => console.log(error)
        )
      },
      error => console.log(error)
    )
  }

  updateToApproved() {
    this.requestService.updateToApproved(this.request).subscribe(
      data => {
        this.router.navigateByUrl('/request/review')

        console.log(data)
      },
      error => console.log(error)
    )
  }
  updateToRejected() {
    this.requestService.updateToRejected(this.request).subscribe(
      data => {
        this.router.navigateByUrl('/request/review')

        console.log(data)
      },
      error => console.log(error)
    )
  }

}
