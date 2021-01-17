import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createUser(){
    return this._http.get("http://localhost:3000/users");
  }
  getAlluser(){}
  updateUser(){}
  deleteUser(){}
}
