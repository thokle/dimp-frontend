import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dead, Deadline} from "../models/deadline";

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  baseUrl = environment.url;
  constructor(private  http: HttpClient) { }


  public  GetDeadlimes(bladid: number, type:number): Observable<Dead[]>{
    const  url = this.baseUrl + 'deadline/' + bladid + '/' + type;
    return  this.http.get<Dead[]>(url);

}

  public  Post(deadline: Deadline): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const  url = this.baseUrl + 'deadline/';
    return  this.http.post(url, JSON.stringify(deadline), {headers: headers});

  }

  public  Delete(bladid: number, linje: number): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
    const url = this.baseUrl + 'deadline/'+ bladid + '/' + linje;
    return this.http.delete( url, {headers: headers});
  }
}
