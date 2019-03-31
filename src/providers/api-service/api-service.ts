import { CONSTANTS } from '../../utils/constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiServiceProvider {

  constructor(public http: HttpClient) {
  }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  login(credentials: any): any {
    let body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    console.log('====== 12 ======', CONSTANTS.BASE_URL);
    return this.http.post(CONSTANTS.BASE_URL + 'login', body.toString(), this.options)
  }

  register(data) {
    let body = new URLSearchParams();
    body.set('customername', data.name);
    body.set('Ostock', data.stock);
    body.set('date', data.date)
    return this.http.post(CONSTANTS.BASE_URL + 'register', body.toString(), this.options)
  }

  searchCustomer (name) {
    return this.http.get(CONSTANTS.BASE_URL + 'search/' + name)

  }
}
