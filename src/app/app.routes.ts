import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/views/main/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {HOME_ROUTES} from "./views/home/home.routes";
import {NotFound} from "./components/not-found/not-found.component";

export const routes: Routes = [
    ...HOME_ROUTES,
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: "**", component: NotFound}
];
