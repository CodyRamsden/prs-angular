import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItem } from 'src/app/models/line-item.model';
import { Product } from 'src/app/models/product.model';
import { Request } from 'src/app/models/request.model';
import { Vendor } from 'src/app/models/vendor.model';
import { LineItemService } from 'src/app/services/line-item.service';
import { ProductService } from 'src/app/services/product.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-line-item-new',
  templateUrl: './line-item-new.component.html',
  styleUrls: ['./line-item-new.component.css']
})
export class LineItemNewComponent implements OnInit {

  lineItem: LineItem = new LineItem()
  request: Request = new Request()
  requestId: number = 0
  vendors: Vendor[] = []
  products: Product[] = []

  constructor(private productService: ProductService, private requestService: RequestService, private lineItemService: LineItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     this.route.params.subscribe(
      params => {
        this.requestId = params.id
        this.requestService.getById(this.requestId).subscribe(
          data => {
            if (data.length > 0) {
              this.request = data[0]
              this.lineItem.request = this.request
            }
          },
          error => console.log(error)
        )
      },
      error => console.log(error)
    )

    this.productService.getAll().subscribe(
      data => {
        this.products = data
        console.log(data)
      },
      error => { console.log(error) }
    )
  }

  createLineItem() {
    this.lineItemService.createLineItem(this.lineItem).subscribe(
      data => {
        console.log(data)
        if (data.length > 0) {
          this.lineItem = data[0]
          this.router.navigateByUrl('/request/lines/' + this.requestId)
        }
      },
      error => console.log(error)
    )
  }

}
