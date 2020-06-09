import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Blad} from "../models/web-priser";


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
}
