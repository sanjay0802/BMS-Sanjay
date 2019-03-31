import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import  'rxjs/add/operator/do';
import {App} from "ionic-angular";


@Injectable()
export class TokenInterceptorServiceProvider implements HttpInterceptor {

  constructor(private app: App) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).do((event: HttpEvent<any>) => {},
      (err: any) => {
        })
      };
}
