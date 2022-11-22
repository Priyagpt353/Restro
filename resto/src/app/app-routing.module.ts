import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddRestoComponent } from '../app/add-resto/add-resto.component'
import { ListRestoComponent } from '../app/list-resto/list-resto.component'
import { LoginComponent } from '../app/login/login.component'
import { RegisterComponent } from '../app/register/register.component'
import {  UpdateRestoComponent } from '../app/update-resto/update-resto.component'

const routes: Routes = [
   {
    path:'add',
    component: AddRestoComponent
   },
   {
    path:'update/:id',
    component: UpdateRestoComponent
   },
   {
    path:'list',
    component: ListRestoComponent
   },
   {
    path:'login',
    component: LoginComponent
   },
   {
    path:'register',
    component: RegisterComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
