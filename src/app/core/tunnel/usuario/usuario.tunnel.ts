import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class refreshTunnel {
  private refreshSubject = new BehaviorSubject<boolean>(false);
  public refresh$ = this.refreshSubject.asObservable();

  setrefreshState(isrefresh: boolean) {
    this.refreshSubject.next(isrefresh);
  }
}
