import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PriserComponent} from "./priser/priser.component";
import {KontakterComponent} from "./kontakter/kontakter.component";

import {combineAll} from "rxjs/operators";
import {AppComponent} from "./app.component";
import {Load2Guard} from "../load2.guard";
import {AuthGuard} from "../auth.guard";



const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'profile',
    component: KontakterComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

