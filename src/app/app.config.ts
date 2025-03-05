import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authReducer } from './store/auth/auth.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./core/interceptor/auth.inteceptor";
import {responseTransformInterceptor} from "./core/interceptor/transform.interceptor";
import {loadingInterceptor} from "./core/interceptor/loading.interceptor";
import {APP_BASE_HREF} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: APP_BASE_HREF, useValue: '/analytics'},
    provideHttpClient(withInterceptors(
      [
        loadingInterceptor,
        //authInterceptor,
        responseTransformInterceptor,
      ]
    )),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore({
      auth: authReducer
    }),
     provideEffects(),
     provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideAnimationsAsync()
  ]
};
