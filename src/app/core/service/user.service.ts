import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {enviroment} from "../../enviroment/service.enviroment";
import { Usuario } from '../interfaces/components/usuario/usuario.interface';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private apiUrl = `${enviroment.getwayUri}/security/user`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/3`);
  }


}
