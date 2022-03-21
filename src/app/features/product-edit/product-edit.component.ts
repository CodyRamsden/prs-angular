import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product()
  productId: number = 0;
  vendors: Vendor[] = []

  constructor(private productService: ProductService, private vendorService: VendorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(
      data => {
        this.vendors = data
      },
        error => {  }
    )
    this.route.params.subscribe(
      params => {
        this.productId = params.id

        this.productService.getById(this.productId).subscribe(
          data => {
            if (data.length > 0) {
              this.product = data[0]
            }
            console.log(data)
          },
          error => { console.log(error) })
         })
  }
  updateProduct() {
    console.log(this.product.id)
    this.productService.updateProduct(this.product) .subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/product/list')
      },
      error => console.log(error)
    )
  }
  compareVendor(vendor1: Vendor, vendor2: Vendor){
    return vendor1 && vendor2 ? vendor1.id === vendor2.id : vendor1 === vendor2;
}

  }
