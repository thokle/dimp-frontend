import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PriceWebService} from "../services/price-web.service";
import { PriserComponent } from './priser/priser.component';
import {RouterModule, RouterStateSnapshot} from "@angular/router";
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
import {ReactiveFormsModule} from "@angular/forms";
import { AnnonceKontrolComponent } from './annonce-kontrol/annonce-kontrol.component';



@NgModule({
  declarations: [
    AppComponent,
    PriserComponent,
    KontakterComponent,
    DeadlineComponent,
    DeadLine2Component,
    AnnonceKontrolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ReactiveFormsModule

  ],
  providers: [PriceWebService, Location, KontaktService, NewPriserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
