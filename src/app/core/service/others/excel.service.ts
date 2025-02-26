import {Injectable} from "@angular/core";
import {enviroment} from "../../../enviroment/service.enviroment.local";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  private apiUrl = `${enviroment.excelKey}`;

  constructor(private http: HttpClient) {}

  getExcel(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
