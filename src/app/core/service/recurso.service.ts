import {Injectable} from "@angular/core";
import {enviroment} from "../../enviroment/service.enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rol} from "../interfaces/services/rol.interface";
import {Recurso} from "../interfaces/components/recurso/recurso.interface";

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
}
