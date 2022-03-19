import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/models/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-vendor-new',
  templateUrl: './vendor-new.component.html',
  styleUrls: ['./vendor-new.component.css']
})
export class VendorNewComponent implements OnInit {
  vendor: Vendor = new Vendor();

  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.vendor)
  }

  createVendor() {
    console.log(this.vendor)
    this.vendorService.createVendor(this.vendor) .subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl('/vendor/list')
      },
      error => console.log(error)
    )
  }

}
