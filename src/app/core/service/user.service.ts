import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {enviroment} from "../../enviroment/service.enviroment";

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private apiUrl = `${enviroment.getwayUri}/security/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/3`);
  }


}
