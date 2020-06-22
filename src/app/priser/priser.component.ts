import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PriceWebService} from "../../services/price-web.service";
import {Blad, Placeringer, Priser} from "../../models/web-priser";
import {SelectionModel} from "@angular/cdk/collections";
import {Location} from "@angular/common";

@Component({
  selector: 'app-priser',
  templateUrl: './priser.component.html',
  styleUrls: ['./priser.component.scss']
})
export class PriserComponent implements OnInit {

  @Input()
  public  email: string;



  blad: Blad[]
  placeringer: Placeringer[];
  priser: Priser[][] = [[]];
  updatePriser: Priser[];
  displayedColumns: string[] = ['farve4Max', 'farve4Min', 'farveMax', 'farveMin', 'farvePris', 'formatFra', 'formatTil', 'mmPris', 'placeringID', 'prislisteID', 'år', 'placeringsNavn'];

  selection = new SelectionModel<Priser>(true, []);

  bladId: any;

  constructor(private route: ActivatedRoute, private location: Location, private  service: PriceWebService) {
    route.queryParamMap.subscribe(value => {
      service.GetBlade(this.email).subscribe(value1 => {
        this.blad = value1;


      });
    });
  }

  isAllSelected() {

  }

  masterToggle() {

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
          Number(value.bladID) == Number(bladid) && Number(value.prislisteID) == Number(prislisteId) && Number(value.placeringID) == Number(placerindId)
        );

        const updataPris = bladred[0];
        const index = p.tempPriser.indexOf(updataPris);
        switch (name) {
          case 'formatFra':
            updataPris.formatFra = Number(html);
            break;
          case 'formatTil':
            updataPris.formatTil = Number(html);
          case 'farveMin':
            updataPris.farveMin = Number(html);
            break;
          case 'farvePris':
            updataPris.farvePris = Number(html);
            break;
          case 'farveMax':
            updataPris.farveMax = Number(html);
            break;
          case 'farve4Min':
            updataPris.farve4Min = Number(html);
            break;
          case 'farve4Max':
            updataPris.farve4Max = Number(html);
            break;
          case 'farve4Pris':
            updataPris.farve4Pris = Number(html);
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
        this.service.UpDatePrice({
          Bladid: pris.bladID,
          farve4Max: pris.farve4Max,
          farve4Min: pris.farve4Min,
          farve4Pris: pris.farve4Pris,
          farveMax: pris.farveMax,
          farveMin: pris.farveMin,
          farvePris: pris.farvePris,
          formatFra: pris.formatFra,
          formatTil: pris.formatTil,
          mmPris: pris.mmPris,
          placeringID: pris.placeringID,
          placeringsNavn: pris.placeringsNavn,
          prislisteID: pris.prislisteID,
          year: pris.year
        }).pipe().subscribe(value1 => {
        }, error => {
          console.log(error);
        });
      });
    })
  }

  Godkend(update: string, bladID: number, $event: any, prislisteID: number, placeringID: number) {
    const html: HTMLElement = (<HTMLElement>document.getElementById(update));

    html.style.backgroundColor = 'Green';
  }

  ngOnInit(): void {

  }
}
