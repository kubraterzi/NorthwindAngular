import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginModel} from '../models/loginModel';
import {Observable} from 'rxjs';
import {SingleResponseModel} from '../models/singleResponseModel';
import {TokenModel} from '../models/TokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44388/api/auth/';

  constructor(private httpClient : HttpClient) { }


  login(userModel:LoginModel) : Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', userModel)
  }


  isAuthenticated(){
    if(localStorage.getItem('token')){//http unutkan bir nesnedir. sayfa yenilendiğinde token bilgileri uçup gider. bu sebeple localStorage da depolanır.
      return true;
    }
    else{
      return false;
    }
  }




}
