import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../common/Login';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://ec2-3-82-6-253.compute-1.amazonaws.com:8080/api/auth/';

  constructor(private sessionService: SessionService, private http: HttpClient) { }

  login(userData: Login): Observable<any> {
    return this.http.post(this.url + 'signin',userData);
  }

}
