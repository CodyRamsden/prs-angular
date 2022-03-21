import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';



//configure base url
const productRoute = "/products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = environment.apiBaseUrl + productRoute

  //get all products
  //http://localhost:8080/product/
  getAll() : Observable<Product []> {
    let requestUrl = this.url + '/';
    return this.http.get<Product[]>(`${this.url}/`)
  }
  //get product by id
  //http://localhost:8080/product/{id}
  getById (id: number) : Observable<Product[]> {
  let requestUrl = this.url + '/' + id
  return this.http.get<Product[]>(requestUrl)
  }
  //http://localhost:8080/product"
  createProduct(product: Product) : Observable<Product[]> {
    return this.http.post<Product[]>(this.url,product)
  }
  //http://localhost:8080/product"
  deleteById(id: number) : Observable<Product[]> {
    let requestUrl = this.url + '/' + id
    return this.http.delete<Product[]>(requestUrl)
  }
}
