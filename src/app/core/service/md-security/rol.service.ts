import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {enviroment} from "../../../enviroment/service.enviroment";
import {Rol} from "../../interfaces/services/rol.interface";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private apiUrl = `${enviroment.getwayUri}/security/rol`;

  constructor(private http: HttpClient) {}

  GetRolById(id: string): Observable<Rol>{
    return this.http.get<Rol>(`${this.apiUrl}/${id}`);
  }

  getRoles(refresh: boolean): Observable<Rol[]> {
    let headers = new HttpHeaders();

    if (refresh) {
      headers = headers.set('ignore-cache', 'Y')
    }

    return this.http.get<Rol[]>(`${this.apiUrl}/all`, { headers });
  }

}
