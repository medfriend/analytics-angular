import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {enviroment} from "../../../enviroment/service.enviroment";
import { Usuario } from '../../interfaces/components/usuario/usuario.interface';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private apiUrl = `${enviroment.getwayUri}/security/user`;

  constructor(private http: HttpClient) {}

  getUsers(refresh: boolean): Observable<Usuario[]> {
    let headers = new HttpHeaders();

    if (refresh) {
      headers = headers.set('ignore-cache', 'Y')
    }

    return this.http.get<Usuario[]>(`${this.apiUrl}/all`, { headers });
  }

  getUser(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/byId/${id}`);
  }

  createUser(usuario: Usuario): Observable<any> {
    const headers = new HttpHeaders({
      'ignore-cache': 'Y'
    });
    return this.http.post<any>(this.apiUrl, usuario, { headers: headers });
  }

  getUserById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/byId/${id}`)
  }
}
