import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../models/vendor.model';



//configure base url
const vendorRoute = "/vendor"

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  url = environment.apiBaseUrl + vendorRoute

  //get all vendors
  //http://localhost:8080/users/
  getAll() : Observable<Vendor []> {
    let requestUrl = this.url + '/';
    return this.http.get<Vendor[]>(`${this.url}/`)
  }
  //get vendor by id
  //http://localhost:8080/user/{id}
  getById (id: number) : Observable<Vendor[]> {
  let requestUrl = this.url + '/' + id
  return this.http.get<Vendor[]>(requestUrl)
  }
  //http://localhost:8080/vendor"
  createVendor(vendor: Vendor) : Observable<Vendor[]> {
    return this.http.post<Vendor[]>(this.url,vendor)
  }
  //http://localhost:8080/users"
  deleteById(id: number) : Observable<Vendor[]> {
    let requestUrl = this.url + '/' + id
    return this.http.delete<Vendor[]>(requestUrl)
  }
  //http://localhost:8080/vendors"
  updateVendor(vendor: Vendor, id: number) : Observable<Vendor[]> {
    let requestUrl = this.url + '/' + id
    return this.http.put<Vendor[]>(requestUrl,vendor)
  }
}
