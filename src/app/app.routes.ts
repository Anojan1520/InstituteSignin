import { Routes } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signin',component:SigninComponent}
];
