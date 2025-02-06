import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auth} from "../../interfaces/services/auth.interface";
import {enviroment} from "../../../enviroment/service.enviroment";
import {Recurso} from "../../interfaces/components/recurso/recurso.interface";
import {Entity} from "../../interfaces/services/entity.interface";

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private apiUrl = `${enviroment.getwayUri}/security/entity`;

  constructor(private http: HttpClient) {}

  getEntities(refresh: boolean): Observable<Entity[]> {
    let headers = new HttpHeaders();

    if (refresh) {
      headers = headers.set('ignore-cache', 'Y')
    }

    return this.http.get<Entity[]>(`${this.apiUrl}/all`, { headers });
  }
}
