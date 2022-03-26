import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const userRoute = "/users"

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http: HttpClient) { }
  url = environment.apiBaseUrl + userRoute

  //http://localhost:8080/users"
  deleteById(id: number) : Observable<User[]> {
    let requestUrl = this.url + '/' + id
    return this.http.delete<User[]>(requestUrl)
  }
}
