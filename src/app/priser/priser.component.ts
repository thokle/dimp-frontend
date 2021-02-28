import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PriceWebService} from "../../services/price-web.service";
import {Blad, Placeringer, Priser} from "../../models/web-priser";
import {SelectionModel} from "@angular/cdk/collections";
import {Location} from "@angular/common";
import {concatMap} from "rxjs/operators";
import {Price} from "../../models/update-priser";
import {NewPriserService} from "../../services/new-priser.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-priser',
  templateUrl: './priser.component.html',
  styleUrls: ['./priser.component.scss']
})
export class PriserComponent implements OnInit {




  blad: Blad[]
  bladPaging: Blad[]
  pagestart = 0;
  pageend = 10;
  maxNumber = 0;
  toPage = 0;
  placeringer: Placeringer[];
  priser: Priser[][] = [[]];
  updatePriser: Priser[];
  stambladEmail='';
  canPrev = false;
  canNext= true;
  displayedColumns: string[] = ['farve4Max', 'farve4Min', 'farveMax', 'farveMin', 'farvePris', 'formatFra', 'formatTil', 'mmPris', 'placeringID', 'prislisteID', 'år', 'placeringsNavn'];

  selection = new SelectionModel<Priser>(true, []);

  bladId: any;
  @Input()
  public  email;

  constructor(private  service: PriceWebService, private  newPriserService: NewPriserService, private  snack:MatSnackBar) {



  }

  upDatePriser(email: string){
    this.service.GetBlade(email).subscribe(value1 => {
      console.log(value1);
      this.blad = value1;
this.bladPaging =  value1.slice(this.pagestart,this.pageend);
this.maxNumber = value1.length;
    });
  }
setBlad() {
  this.blad = this.blad;
}
consoleLog(){
  console.log(this.blad);
  console.log(this.bladPaging);
}
  nextPage() {

    this.canPrev = true;
    if (this.pageend + 10 > this.blad.length) {
      this.setBlad();
      this.bladPaging = this.blad.slice(this.pagestart += 10, this.blad.length);
      this.canNext = false;

  this.consoleLog();
    } else {
      this.setBlad();
      this.blad = this.blad;
      this.bladPaging =  this.blad.slice(this.pagestart += 10, this.pageend += 10);
      this.consoleLog();
    }
    }
  prevPage() {
    this.setBlad();
    if (!this.pagestart) {
      this.bladPaging  = this.blad.slice(this.pagestart -= 10, this.pageend-=10)
    }
    this.bladPaging  = this.blad.slice(this.pagestart -= 10, this.pageend-=10)
  }

  highlight(row, evt): void {
    this.bladId = (<HTMLInputElement>document.getElementById("bladid")).value;

    console.log(this.bladId);

    console.log(row, evt);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Priser) {

  }

  getRowData($row: any) {
    const table: HTMLElement = document.getElementById("table_blad");


  }

  saveDataToArray(id: string, bladid: number, event: any, prislisteId: number, placerindId: number) {
    if (event.type === 'keyup' || event.type == 'keyup.tab') {

      const html: string = (<HTMLInputElement>document.getElementById(id)).value;
      console.log(html);
      console.log(bladid);
      const end = id.indexOf("!");
      const name = id.slice(end + 1);
      const resBlad = this.blad.filter(value => Number(value.bladID) == bladid)
      resBlad.forEach(p => {


        const bladred = p.tempPriser.filter(value =>
          Number(value.bladID) == Number(bladid) && Number(value.PrislisteID) == Number(prislisteId) && Number(value.PlaceringID) == Number(placerindId)
        );

        const updataPris = bladred[0];
        const index = p.tempPriser.indexOf(updataPris);
        switch (name) {
          case 'formatFra':
            updataPris.FormatFra = Number(html);
            break;
          case 'formatTil':
            updataPris.FormatTil = Number(html);
          case 'farveMin':
            updataPris.FarveMin = Number(html);
            break;
          case 'farvePris':
            updataPris.FarvePris = Number(html);
            break;
          case 'farveMax':
            updataPris.FarveMax = Number(html);
            break;
          case 'farve4Min':
            updataPris.Farve4Min = Number(html);
            break;
          case 'farve4Max':
            updataPris.Farve4Max = Number(html);
            break;
          case 'farve4Pris':
            updataPris.Farve4Pris = Number(html);
            break;
          case 'mmPris':
            updataPris.mmPris = Number(html);

            break;
        }
        p.tempPriser[index] = updataPris;
      })
    }

  }

  AllOkay() {
    this.blad.forEach(value => {
      value.tempPriser.forEach(pris => {
        let updatePris: Price = { priceWeb: {bladID: pris.bladID, ControlNavn: '',  Farve4Max: pris.Farve4Max, Farve4Min: pris.Farve4Min, Farve4Pris: pris.Farve4Pris, FarveMax: pris.FarveMax,
            FarveMin: pris.FarveMin, FarvePris:pris.FarvePris, FormatFra: pris.FormatFra, FormatTil: pris.FormatTil, mmPris: pris.mmPris , PlaceringID: pris.PlaceringID, PrislisteID: pris.PlaceringID, År: pris.Year, ErMeldInd: true}}
        this.service.UpDatePrice(
             updatePris    ).pipe().subscribe(value1 => {
               this.snack.open('pris er opdateret')
        }, error => {
          console.log(error);
        },()=> {

        });
      });
    });

    this.newPriserService.UpdateNewPriser(this.email).subscribe(s=> {

    });
  }

  Godkend(update: string, bladID: number, $event: any, prislisteID: number, placeringID: number) {
    const html: HTMLElement = (<HTMLElement>document.getElementById(update));

    html.style.backgroundColor = 'Green';
  }

  ngOnInit(): void {
    this.upDatePriser(this.email);
    console.log('email  ' + this.email);
  }
}
