import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Payment } from '../_models/payment.model';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient:HttpClient) { }

  addtoken(data:Payment){
    return this.httpClient.post(environment.baseUrl+'token',data);
  
  }
  
}
