import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auth} from "../interfaces/services/auth.interface";
import {enviroment} from "../../enviroment/service.enviroment";

@Injectable({
  providedIn: 'root'
})
export class EntityService {
  private apiUrl = `${enviroment.getwayUri}/security/entity`;

  constructor(private http: HttpClient) {}

}
