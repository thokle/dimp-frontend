import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StamBladUdSendingKontakt} from "../models/stam-blad-ud-sendingkontakt";
import { UdsendingKontakter} from "../models/udsending-kontakter";
import {StamBladUdsending} from "../models/stam-blad-udsending";

@Injectable({
  providedIn: 'root'
})
export class KontaktService {

  private  baseUrl = environment.url;
  constructor(private  http: HttpClient) { }


  public GetStamBladUdsendingkontakterByNavn(navn: string): Observable<UdsendingKontakter[]> {
    const url = this.baseUrl + 'kontakter-api/api/kontakt?name=' +navn;
    return  this.http.get<UdsendingKontakter[]>(url).pipe();
  }



  public UpdateStamBladUdendingKontakterByID(kontakt: StamBladUdSendingKontakt[]): Observable<any> {
    const url = this.baseUrl + 'kontakt-api/api/kontakter/';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(kontakt), {headers: headers}).pipe();


  }

  public  UpdateKontakt(kontakt: UdsendingKontakter) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseUrl + 'kontakt-api/api/kontakter/';

    return this.http.post(url, JSON.stringify(kontakt), {headers: headers} ).pipe();


  }


}
