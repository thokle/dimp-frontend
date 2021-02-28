import {Component, Inject, Input, OnInit} from '@angular/core';
import {KontaktService} from "../../services/kontakt.service";

import {FormBuilder, FormGroup} from "@angular/forms";
import { UdsendingKontakter} from "../../models/udsending-kontakter";

import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {OpretKontaktDialogComponent} from "../opret-kontakt-dialog/opret-kontakt-dialog.component";

export  interface  Titler {
  id;
  name;
}



@Component({
  selector: 'app-kontakter',
  templateUrl: './kontakter.component.html',
  styleUrls: ['./kontakter.component.scss']
})
export class KontakterComponent implements OnInit {

  kontaker: UdsendingKontakter[] = [];



  @Input()
  public  bladid: string;

  from: FormGroup
  selectedKontaktType;
  selelectKontatkTitel

  constructor(private ks: KontaktService , private  fb: FormBuilder, private snackBar: MatSnackBar, private diaog: MatDialog) {
fb.group({
  Telefonnummer: [],
  BladId: [],
  Email:[],
  Name: []
});
  }

  ngOnInit(): void {
   this.UpdateKontakter(this.bladid);
  }


  private  UpdateKontakter(name){
    console.log("name" + name);
    this.ks.GetStamBladUdsendingKontalterByBladId(name).subscribe(value => {
      this.kontaker = value;
    })
  }


  update() {
    this.ks.UpdateKontakt({BladId: this.from.controls.BladId.value, Email: this.from.controls.Email.value,
      KontaktType: this.selectedKontaktType, Name: this.from.controls.Name.value,
      Telefonnummer: this.from.controls.Telefonnummer.value, Titel: this.selelectKontatkTitel  }).subscribe(value => {
        this.snackBar.open('Kontakt oprettet');
    })

  }

  saveToArray(Title: string, KontaktType: string, telefonnummer: number, BladId: number, Email: string, Name: string) {
        this.ks.UpdateKontakt({Titel: Title, KontaktType: KontaktType, Telefonnummer: telefonnummer, BladId: BladId, Email: Email, Name: Name }).subscribe(value => {
          this.snackBar.open('Kontakt er opdateret')
        })
  }

  openDialog($event: MouseEvent): void {
    this.diaog.open(OpretKontaktDialogComponent, {data: this.bladid, autoFocus: true}).afterClosed().subscribe(value => {
      const ny = value as UdsendingKontakter
      this.ks.UpdateKontakt(ny).subscribe(value1 => {

      });
    }, error => {
      console.log('Error added contact', error.toLocaleString());
    }, () => {
      this.ks.GetStamBladUdsendingKontalterByBladId(Number.parseInt(this.bladid,0)).subscribe(value => {
        this.kontaker = value;
      })
    });
  }
}
