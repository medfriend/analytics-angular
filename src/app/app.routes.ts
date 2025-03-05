import { Routes } from '@angular/router';
import {HOME_ROUTES} from "./views/home/home.routes";
import {NotFound} from "./components/not-found/not-found.component";
import * as path from "node:path";
import IndicadoresComponent from "./feature/indicadores/indicadores.component";

export const routes: Routes = [
    ...HOME_ROUTES,
    {
      path: "libre",
      children: [
        {path: 'indicadores', component: IndicadoresComponent},
      ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: "**", component: NotFound},
];
