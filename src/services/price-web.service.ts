import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blad} from "../models/web-priser";
import {UpdatePriser} from "../models/update-priser";
const headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

const requestOptions = {
  headers: new Headers(headerDict),
};

@Injectable({
  providedIn: 'root'
})
export class PriceWebService {



  private  baseurl = environment.url;
  constructor(private  http: HttpClient) { }


  public GetBlade(email: string): Observable<Blad[]> {
    let url = this.baseurl + 'priceWeb/'+email;
    return this.http.get<Blad[]>(url).pipe();
  }


  public UpDatePrice(updataPrice: UpdatePriser){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});

    let url = this.baseurl + 'priceWeb';
    return this.http.post(url, updataPrice, {headers: headers}).pipe();


  }
}
