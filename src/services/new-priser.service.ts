import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Email} from "../models/email";
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
export class NewPriserService {

  private  bastUrl = environment.url;
  constructor(private  http: HttpClient) {


  }


  public  UpdateNewPriser(email: string):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    let url = this.bastUrl + "newPriser";
 let jsonEmail: Email = {email: email}
    return  this.http.post(url, JSON.stringify(jsonEmail),{headers: headers});
  }
}
