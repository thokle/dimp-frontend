import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {WebAnnoce} from "../models/web-annoce";
import {WebInsert} from "../models/web-insert";
import {J} from "@angular/cdk/keycodes";
import {Update} from "../models/update";
import {Update3} from "../models/update3";
import {Update2} from "../models/update2";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseurl = environment.url + "/AnnonceKontrol";
  constructor(private  http: HttpClient ) { }


  public  GetWebAnnonceKontrol(avisid, indrykningsuge, year): Observable<WebAnnoce[]> {
   const url =  this.baseurl + "/annoncekontrol/" + avisid +"/" + indrykningsuge + "/" + year;
        return  this.http.get<WebAnnoce[]>(url).pipe();
  }

  public  GetManglerKontrol(OrdreID: Number) : Observable<Number>{
    const ur = this.baseurl + "/ManglerKontrol/"+ OrdreID;
    return  this.http.get<Number>(ur).pipe();

  }

  public  GetAvisNavn(bladid): Observable<string[]> {
    const url =  this.baseurl + "/annoncekontrol/" + bladid;
    return  this.http.get<string[]>(url).pipe();
  }

  public  GetAntalFejl(ordreId): Observable<number[]>
  {
    const url = this.baseurl + "/AntaFejl/" + ordreId;
    return  this.http.get<number[]>(url).pipe();
  }

  public  SelectFakturing(OrdreId): Observable<number[]> {
    const url = this.baseurl + "/SelectFakturing/" +OrdreId;
    return  this.http.get<number[]>(url).pipe();
  }

  public  Delete(OrdreID, BladID): Observable<number> {
    const url = this.baseurl + "/annoncekontrol/" + OrdreID + "/" + BladID;
    return  this.http.delete<number>(url).pipe();
  }

  public  InsertSQL(insert: WebInsert): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseurl +"/InsertSQL/";
    return  this.http.post<number>(url, JSON.stringify(insert),{headers: headers}).pipe()
  }

  public  UpdateAnnonceKontrol(update2: Update2): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseurl + "/UpdateAnnonceKontrol";
    return  this.http.post<number>(url, JSON.stringify(update2),{headers: headers}).pipe()
  }

  public UpdateMediePlan(update: Update): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseurl + "/UpdateMediePlan";

    return  this.http.post<number>(url, JSON.stringify(update),{headers: headers}).pipe();
  }

  public UpdateMediePlanNr(update3: Update3): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
const url = this.baseurl + "/UpdateMediePlanNr";

return this.http.post<number>(url, JSON.stringify(update3), {headers: headers}).pipe();
  }

}
