import { HttpInterceptorFn } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {throwError} from "rxjs";

export const responseTransformInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)

  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        const body:any = event.body;

        if (body?.data) {
          return event.clone({ body: body.data });
        } else if (body?.error) {
          console.log("error papi", body.error);
          return event.clone({ body: body.error });
        }
      }

      return event;
    }),
    catchError(err => {
      if (err.status === 401) { // Check if the status is 401
        router.navigate(['/login']); // Redirect to /login
      }
      return throwError(() => err); // Re-throw the error
    })
  );
};
