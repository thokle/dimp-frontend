import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PriceWebService} from "../services/price-web.service";
import { PriserComponent } from './priser/priser.component';
import {RouterModule} from "@angular/router";
import {Location} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    AppComponent,
    PriserComponent
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
        MatFormFieldModule
    ],
  providers: [PriceWebService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
