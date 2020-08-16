import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deadline} from "../models/deadline";

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  baseUrl = environment.url;
  constructor(private  http: HttpClient) { }


  public  GetDeadlimes(bladid: number, type:number): Observable<Deadline[]>{
    const  url = this.baseUrl + 'deadline/' + bladid + '/' + type;
    return  this.http.get<Deadline[]>(url);

}

  public  Post(deadline: Deadline): Observable<any>{
    const  url = this.baseUrl + 'deadline';
    return  this.http.post(url, JSON.stringify(deadline));

  }
}
