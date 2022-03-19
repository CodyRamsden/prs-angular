import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product()
  vendors: Vendor[] = []

  constructor(private productService: ProductService, private vendorService: VendorService, private router: Router) {
}

  ngOnInit(): void {
    this.vendorService.getAll().subscribe(
      data => {
        this.vendors = data
      },
        error => {  }
    )
  }
  createProduct() {
    console.log(this.product)
    this.productService.createProduct(this.product) .subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/vendor/list')
      },
      error => console.log(error)
    )
  }
}
