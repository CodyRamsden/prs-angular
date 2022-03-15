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

  //get all users
  //http://localhost:8080/users/
  getAll() : Observable<Vendor []> {
    let requestUrl = this.url + '/';
    return this.http.get<Vendor[]>(`${this.url}/`)
  }
  //get user by id
  //http://localhost:8080/users/{id}
  getById (id: number) : Observable<Vendor[]> {
  let requestUrl = this.url + '/' + id
  return this.http.get<Vendor[]>(requestUrl)
  }
}
