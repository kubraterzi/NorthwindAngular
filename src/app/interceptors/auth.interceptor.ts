import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable() // tüm http isteklerimizi intercept edecek yapıdır.
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  // request sunucuya gönderdiğimiz tüm isteklerdir. next ise isteği göndermeden önce araya giren ve isteğin içerisine token koyan yapıdır.
  // eğer biz bu isteğin içerisine header koyarsak, yapmak istediğimiz tüm işlemler ve göndermek istediğimiz tüm isteklerde bu header bilgilerini kullanır.

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token'); //localStorage içerisindeki token ı yakaladık ve değişkene atadık.
    let newRequest : HttpRequest<any>; //yapmış olduğumuz istek
    newRequest=request.clone({// newrequest içerisine, kullanıcının dışarıdan gönderdiği isteği klonla
      headers:request.headers.set('Authorization' , 'Bearer ' + token)
    })
    return next.handle(newRequest); //  dışarıdan gelen isteğe, gerekli verileri ekleyerek yeni bir istek kopyasına atıyoruz, bu sebeple de bu istek kopyasını handle ediyoruz.
  }
}
