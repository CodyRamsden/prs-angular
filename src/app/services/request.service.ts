import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from '../models/request.model';
import { User } from '../models/user.model';



//configure base url
const requestRoute = "/request"

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  url = environment.apiBaseUrl + requestRoute

  //get all requests
  //http://localhost:8080/requests/
  getAll() : Observable<Request []> {
    let requestUrl = this.url + '/';
    return this.http.get<Request[]>(`${this.url}/`)
  }

  getAllByUser(user: User) : Observable<Request[]> {
    return this.http.put<Request[]>(this.url, user)
  }

  //get request by id
  //http://localhost:8080/requests/{id}
  getById (id: number) : Observable<Request[]> {
  let requestUrl = this.url + '/' + id
  return this.http.get<Request[]>(requestUrl)
  }
  //http://localhost:8080/users"
  createRequest(request: Request) : Observable<Request[]> {
    return this.http.post<Request[]>(this.url,request)
  }

  //http://localhost:8080/users"
  deleteRequest(id: number) : Observable<Request[]> {
    let requestUrl = this.url + '/' + id
    return this.http.delete<Request[]>(requestUrl)
  }

  updateRequest(request: Request) : Observable<Request[]> {
    let requestUrl = this.url + '/' + request.id
    return this.http.put<Request[]>(requestUrl,request)
  }
  updateToReview(request: Request) : Observable<Request[]> {
    let requestUrl = this.url + '/review/' + request.id
    return this.http.put<Request[]>(requestUrl,request)
  }
  updateToApproved(request: Request) : Observable<Request[]> {
    let requestUrl = this.url + '/approve/' + request.id
    return this.http.put<Request[]>(requestUrl,request)
  }
  updateToRejected(request: Request) : Observable<Request[]> {
    let requestUrl = this.url + '/reject/' + request.id
    return this.http.put<Request[]>(requestUrl,request)
  }
  updateToReopen(request: Request) : Observable<Request[]> {
    let requestUrl = this.url + '/reopen/' + request.id
    return this.http.put<Request[]>(requestUrl,request)
  }
  getAllForReview(user: User) : Observable<Request[]> {
    return this.http.put<Request[]>(`${this.url}/review`, user)
  }

}
