import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: { clone: (arg0: { setHeader: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }){
    let authService = this.injector.get(AuthService)
    let tokenizedRequest = req.clone({
      setHeader:{
        Authorization: `Bearer ${authService.getToken}`
      }
    })
    return next.handle(tokenizedRequest)
  }
}
