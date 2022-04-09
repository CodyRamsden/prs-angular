import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Product } from 'src/app/models/product.model';
import { Request } from 'src/app/models/request.model';
import { User } from 'src/app/models/user.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { RequestService } from 'src/app/services/request.service';
import { SystemService } from 'src/app/services/system.service';


@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {
  requests: Request[] = []
  lineItem: LineItem[] = []
  product: Product[] = []
  user: User[] = []

  constructor(private lineItemService: LineItemService, private requestService: RequestService, private router: Router, private route: ActivatedRoute, private systemService: SystemService) { }

  ngOnInit(): void {
    const loggedInUser = this.systemService.loggedInUser
    if (loggedInUser && loggedInUser.reviewer) {
    this.requestService.getAllForReview(loggedInUser).subscribe(
      data => {
        this.requests = data
        console.log(data)
      },
      error => console.log(error)
    )
    } else if (loggedInUser && !loggedInUser.admin) {
      this.requestService.getAllForReview(loggedInUser).subscribe(
        data => {
          this.requests = data
          console.log(data)
        },
        error => console.log(error)
      )
    }
  }
}
