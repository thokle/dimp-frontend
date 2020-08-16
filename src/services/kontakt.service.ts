import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {StamBladUdSendingKontakt} from "../models/stam-blad-ud-sendingkontakt";

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



}
