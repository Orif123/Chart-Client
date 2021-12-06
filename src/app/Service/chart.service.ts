import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    Authorization: '1234'
  })
}
@Injectable({
  providedIn: 'root'
})

export class ChartService {
  constructor(private http : HttpClient) {
    
   }
   
   
  myData(){
    return this.http.get("https://localhost:44303/home", {headers: httpOptions.headers}).toPromise().then((data)=>{
      return data}
    )
    
  }
}
 