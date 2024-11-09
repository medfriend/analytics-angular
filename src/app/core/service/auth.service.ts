import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auth} from "../interfaces/services/auth.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/medfri-getway/security/auth';

  constructor(private http: HttpClient) {}

  auth(data: Auth): Observable<any> {

    const headers = new HttpHeaders({
      'Usuario': data.usuario.toString()
    });

    return this.http.post(`${this.apiUrl}`, data, { headers: headers });
  }
}
