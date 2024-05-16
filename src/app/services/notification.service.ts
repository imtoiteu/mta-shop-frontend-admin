import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  url = 'https://d2505jbzq2fjuy.cloudfront.net/api/notification';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }

  readed(id: number) {
    return this.http.get(this.url+'/readed/'+id);
  }
}
