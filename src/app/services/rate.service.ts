import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  url = "https://d2505jbzq2fjuy.cloudfront.net/api/rates";

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url+'/'+id);
  }
}
