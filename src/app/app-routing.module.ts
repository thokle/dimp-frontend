import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PriserComponent} from "./priser/priser.component";


const routes: Routes = [{ path: 'priser', component: PriserComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
