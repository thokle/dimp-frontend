import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {KontaktTitlers, KontaktTyper, UdsendingKontakter} from "../models/udsending-kontakter";


@Injectable({
  providedIn: 'root'
})
export class KontaktService {

  private  baseUrl = environment.url;
  constructor(private  http: HttpClient) { }




  public GetStamBladUdsendingKontalterByBladId(bladid: number): Observable<UdsendingKontakter[]> {
    const url = this.baseUrl + 'kontakter-api/api/Kontakt?bladid='+bladid;
    return  this.http.get<UdsendingKontakter[]>(url).pipe();
}




  public  UpdateKontakt(kontakt: UdsendingKontakter) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseUrl + 'kontakter-api/api/kontakter/';

    return this.http.post(url, kontakt, {headers: headers} ).pipe();


  }

  public  GetKontaktTitler(): Observable<KontaktTitlers[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseUrl + 'kontakter-api/api/kontakttiter';
    return  this.http.get<KontaktTitlers[]>(url).pipe();
  }

  public  GetKontaktTyper(): Observable<KontaktTyper[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseUrl + 'kontakter-api/api/kontakttyper';
    return  this.http.get<KontaktTyper[]>(url).pipe();
  }

}
