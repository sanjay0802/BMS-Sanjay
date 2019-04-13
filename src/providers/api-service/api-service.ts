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
    body.set('createdDate', data.date)
    return this.http.post(CONSTANTS.BASE_URL + 'register', body.toString(), this.options)
  }

  searchCustomer (name) {
    return this.http.get(CONSTANTS.BASE_URL + 'search/' + name)

  }

  updateCusotmerDetails(data) {
    let body = new URLSearchParams();
    body.set('customername', data.customername);
    body.set('Ostock', data.Ostock);
    body.set('updatedDate', data.updatedDate)
    body.set('filled', data.filled);
    body.set('empty', data.empty);
    body.set('dcnumber', data.dcnumber)
    return this.http.post(CONSTANTS.BASE_URL + 'updatestock', body.toString(), this.options)

  }
  searchVendor(vendorName) {
    return this.http.get(CONSTANTS.BASE_URL + 'searchVendor/' + vendorName)

  }

  updateVendorDetails(data) {
    let body = new URLSearchParams();
    body.set('vendorName', data.vendorName);
    body.set('Ostock', data.Ostock);
    body.set('updatedDate', data.updatedDate)
    body.set('filled', data.filled);
    body.set('empty', data.empty);
    body.set('dcnumber', data.dcnumber)
    return this.http.post(CONSTANTS.BASE_URL + 'updatestockv', body.toString(), this.options)

  }
  registerVendors(vendorData){
    let body = new URLSearchParams();
    body.set('mStock', vendorData.mStock);
    body.set('aStock',vendorData.aStock);
    body.set('bStock',vendorData.bStock);
    body.set('createdDate',vendorData.stockDate)
    return this.http.post(CONSTANTS.BASE_URL + 'registerVendor', body.toString(), this.options)



  }
}
