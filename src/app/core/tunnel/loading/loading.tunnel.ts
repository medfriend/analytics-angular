import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

//TODO revizar como el enrutamiento daña los estados del tunel
@Injectable({
  providedIn: 'root'
})
export class LoadingTunnel {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  setLoadingState(isLoading: boolean) {
    console.log('Cambiando estado de carga a:', isLoading);
    this.loadingSubject.next(isLoading);
  }
}
