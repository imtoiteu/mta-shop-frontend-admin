import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {
  url = "http://ec2-3-82-6-253.compute-1.amazonaws.com:8080/api/rates";

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(this.url);
  }

  delete(id: number) {
    return this.httpClient.delete(this.url+'/'+id);
  }
}
