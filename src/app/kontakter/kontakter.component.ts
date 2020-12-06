import {Component, Inject, Input, OnInit} from '@angular/core';
import {KontaktService} from "../../services/kontakt.service";
import {KontaktTitler, KontaktTyper, StamBladUdSendingKontakt} from "../../models/stam-blad-ud-sendingkontakt";
import {FormBuilder, FormGroup} from "@angular/forms";
import { UdsendingKontakter} from "../../models/udsending-kontakter";
import {StamBladUdsending} from "../../models/stam-blad-udsending";



@Component({
  selector: 'app-kontakter',
  templateUrl: './kontakter.component.html',
  styleUrls: ['./kontakter.component.scss']
})
export class KontakterComponent implements OnInit {

  kontaker: UdsendingKontakter[] = [];



  @Input()
  public  navn: string;

  from: FormGroup
  constructor(private ks: KontaktService , private  fb: FormBuilder) {
fb.group({

});
  }

  ngOnInit(): void {
   this.UpdateKontakter(this.navn);
  }


  private  UpdateKontakter(name){

    console.log("name" + name);

    this.ks.GetStamBladUdsendingkontakterByNavn(name).subscribe(value => {
      this.kontaker = value;

    })
  }


  update() {


  }

  saveToArray(Title: string, KontaktType: string, telefonnummer: number, BladId: number, Email: string, Name: string) {

  }
}
