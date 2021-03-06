import { Injectable } from '@angular/core';
import {ListaData} from 'src/app/models/lista-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = "https://reqres.in/";

  constructor(private http:HttpClient, private router:Router) { }

  getAllData(page:number):Observable<ListaData[]>{
    let direccion = this.url + "api/users?page="+page;
    return this.http.get<ListaData[]>(direccion);
  }
  postData(form:any):Observable<Response>{
    let direccion = this.url+"api/users";
    return this.http.post<Response>(direccion,form);
  }
  putData(form:any):Observable<Response>{    
    let direccion = this.url+"api/users"+form.identifier;
    return this.http.put<Response>(direccion,form);
  }  
  deleteData(form:any){    
    let direccion = this.url+"api/users"+form.identifier;
    let options= {
      Headers: new HttpHeaders({
        'Content-type':'application/json'
      }),
      body: form,
      responseType: 'text' as 'json'
    }
    return this.http.delete<Response>(direccion,options);
  }  
}
