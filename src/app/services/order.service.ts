import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "https://d2505jbzq2fjuy.cloudfront.net/api/orders";

  urlOrderDetail = "https://d2505jbzq2fjuy.cloudfront.net/api/orderDetail";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.url);
  }

  getById(id:number) {
    return this.httpClient.get(this.url+'/'+id);
  }

  getByOrder(id:number) {
    return this.httpClient.get(this.urlOrderDetail+'/order/'+id);
  }

  cancel(id: number) {
    return this.httpClient.get(this.url+'/cancel/'+id);
  }

  deliver(id: number) {
    return this.httpClient.get(this.url+'/deliver/'+id);
  }

  success(id: number) {
    return this.httpClient.get(this.url+'/success/'+id);
  }
}
