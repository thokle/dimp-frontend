import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PriceWebService} from "../services/price-web.service";
import {Blad, Placeringer, Priser} from "../models/web-priser";
import {combineAll} from "rxjs/operators";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SelectionModel} from "@angular/cdk/collections";
import {MatTableDataSource} from "@angular/material/table";
import {UpdatePriser} from "../models/update-priser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  email: string = '';
  blad: Blad[]
  placeringer: Placeringer[];
  priser: Priser[][] = [[]];
  updatePriser: UpdatePriser;
  displayedColumns: string[] = [ 'farve4Max', 'farve4Min', 'farveMax', 'farveMin', 'farvePris', 'formatFra', 'formatTil', 'mmPris', 'placeringID', 'prislisteID', 'år', 'placeringsNavn'];

  selection = new SelectionModel<Priser>(true, []);

  bladId: any;

  constructor(private route: ActivatedRoute, private location: Location, private  service: PriceWebService) {
    route.queryParamMap.subscribe(value => {
        service.GetBlade(value.get('email')).subscribe(value1 => {
          this.blad = value1;
          this.blad.forEach(value2 => {
            this.priser.push(value2.tempPriser);
          });
          console.log(this.priser);
        });

    });
  }

  isAllSelected() {

  }

  masterToggle() {

  }

  highlight(row, evt): void {
   this.bladId =  (<HTMLInputElement>document.getElementById("bladid")).value;

    console.log(this.bladId);

    console.log(row, evt);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Priser) {

  }

  getRowData($row: any) {
    const table: HTMLTableElement = document.querySelector("#table_blad");
    const rows = table.tBodies[0].rows;

    Array.from(rows).forEach((row,idx) => {
      row.addEventListener('click', ev => {

      });
    });
  }
}
