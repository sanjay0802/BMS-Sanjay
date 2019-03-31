
import { Component, OnInit } from '@angular/core';
import {ApiServiceProvider} from "../../providers/api-service/api-service";

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage implements OnInit {
  mydate1;

  constructor(private apiService: ApiServiceProvider) {
  }

  register(name,stock,date) {
    console.log('===== 16 =====', name)
    console.log('===== 17 =====', stock)
    console.log('===== 18 =====', date)
    const modifiedDate = date.day.toString() + '/' + date.month.toString() + '/' + date.year.toString()
    this.apiService.register( { name : name, stock: stock, date: modifiedDate }).subscribe(res => {
      console.log('=== 18 ===', res)
    })
  }

  ngOnInit() {
  }

}
