import { HttpInterceptorFn } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const responseTransformInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        const body:any = event.body;

        if (body?.data) {
          return event.clone({ body: body.data });
        } else if (body?.error) {
          return event.clone({ body: body.error });
        }
      }

      return event;
    })
  );
};
