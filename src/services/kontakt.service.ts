import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StamBladUdSendingKontakt} from "../models/stam-blad-ud-sendingkontakt";
import {RootObjectUdsendingKontakter} from "../models/udsending-kontakter";

@Injectable({
  providedIn: 'root'
})
export class KontaktService {

  private  baseUrl = environment.url;
  constructor(private  http: HttpClient) { }


  public GetStamBladUdsendingkontakterById(id: number): Observable<StamBladUdSendingKontakt[]> {
      const url = this.baseUrl + 'kontakter/' + id;
      return  this.http.get<StamBladUdSendingKontakt[]>(url).pipe();
  }

  public UpdateStamBladUdendingKontakterByID(kontakt: StamBladUdSendingKontakt[]): Observable<any> {
    const url = this.baseUrl + 'kontakter/';
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    return this.http.post(url, JSON.stringify(kontakt), {headers: headers}).pipe();


  }

  public  UpdateKontakt(kontakt: RootObjectUdsendingKontakter) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseUrl + 'kontater/';

    return this.http.post(url, JSON.stringify(kontakt), {headers: headers} ).pipe();


  }


}
