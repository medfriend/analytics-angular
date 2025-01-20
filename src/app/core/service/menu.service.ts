import {enviroment} from "../../enviroment/service.enviroment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Menu} from "../interfaces/components/menu/menu.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = `${enviroment.getwayUri}/security/menu`;

  constructor(private http: HttpClient) {}

  getParentMenu(id: string, refresh: boolean): Observable<Menu[]> {
    let headers = new HttpHeaders();

    if (refresh) {
      headers = headers.set('ignore-cache', 'Y')
    }

    return this.http.get<Menu[]>(`${this.apiUrl}/parents/${id}`, { headers });
  }

  createMenu(dto: Menu): Observable<Menu> {
    return this.http.post<Menu>(`${this.apiUrl}/`, dto);
  }
}
