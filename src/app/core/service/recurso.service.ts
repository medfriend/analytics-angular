import {Injectable} from "@angular/core";
import {enviroment} from "../../enviroment/service.enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rol} from "../interfaces/services/rol.interface";
import {Recurso} from "../interfaces/components/recurso/recurso.interface";
import {Usuario} from "../interfaces/components/usuario/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private apiUrl = `${enviroment.getwayUri}/security/resources`;

  constructor(private http: HttpClient) {}

  getResources(refresh: boolean): Observable<Recurso[]> {
    let headers = new HttpHeaders();

    if (refresh) {
      headers = headers.set('ignore-cache', 'Y')
    }

    return this.http.get<Recurso[]>(`${this.apiUrl}/all`, { headers });
  }

  createResource(resource: Recurso): Observable<any> {
    const headers = new HttpHeaders({
      'ignore-cache': 'Y'
    });
    return this.http.post<any>(this.apiUrl, resource, { headers: headers });
  }
}
