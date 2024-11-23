import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {LoadingTunnel} from "../tunnel/loading/loading.tunnel";
import {finalize} from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingTunnel);

  loadingService.setLoadingState(true);

  return next(req).pipe(
    finalize(() => {
      loadingService.setLoadingState(false);
    })
  );
};
