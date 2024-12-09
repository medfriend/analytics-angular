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

  getParentMenu(id: string): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.apiUrl}/parents/${id}`);
  }
}
