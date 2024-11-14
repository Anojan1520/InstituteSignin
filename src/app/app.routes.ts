import { Routes } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import { SigninComponent } from './auth/signin/signin.component';
import { Component } from '@angular/core';
import { ResetpasswordComponent } from './auth/resetpassword/resetpassword.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'signin',component:SigninComponent},
    {path:'resetPassword',component:ResetpasswordComponent}
];
