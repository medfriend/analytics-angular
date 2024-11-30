import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {enviroment} from "../../enviroment/service.enviroment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = enviroment.getwayUri; // Cambia esto por tu base URL

  constructor(private http: HttpClient) {}

  // Método GET general
  get<T>(endpoint: string, refresh: boolean, params?: any): Observable<T> {
    const url = `${this.baseUrl}/${endpoint}`;

    let headers = new HttpHeaders();

    if (refresh) {
      headers = headers.set('ignore-cache', 'Y')
    }
    
    return this.http.get<T>(url, { params, headers });
  }

}
