import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PriceWebService} from "../services/price-web.service";
import { PriserComponent } from './priser/priser.component';
import {RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {Location} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { KontakterComponent } from './kontakter/kontakter.component';
import {KontaktService} from "../services/kontakt.service";
import {NewPriserService} from "../services/new-priser.service";
import { DeadlineComponent } from './deadline/deadline.component';
import { DeadLine2Component } from './dead-line2/dead-line2.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AnnonceKontrolComponent } from './annonce-kontrol/annonce-kontrol.component';
import { DeadlineEjerforholdComponent } from './deadline-ejerforhold/deadline-ejerforhold.component';
import { OpretKontaktDialogComponent } from './opret-kontakt-dialog/opret-kontakt-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBar} from "@angular/material/snack-bar";

const routes: Routes = [ {
path: 'deadline/:id' , component: DeadlineComponent},
  {path: 'deadline2/:id' , component: DeadLine2Component},
  {path: 'kontakter/:kontakter', component: KontakterComponent},
  {path: 'priser/:stamblademail', component: PriserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PriserComponent,
    KontakterComponent,
    DeadlineComponent,
    DeadLine2Component,
    AnnonceKontrolComponent,
    DeadlineEjerforholdComponent,
    OpretKontaktDialogComponent
  ],
    imports: [
      RouterModule.forRoot(routes),
        BrowserModule,

        HttpClientModule,
        BrowserAnimationsModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
         MatDialogModule

          ],
  providers: [PriceWebService, Location, KontaktService, NewPriserService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
