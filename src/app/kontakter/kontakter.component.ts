import {Component, Inject, Input, OnInit} from '@angular/core';
import {KontaktService} from "../../services/kontakt.service";
import {KontaktTitler, KontaktTyper, StamBladUdSendingKontakt} from "../../models/stam-blad-ud-sendingkontakt";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RootObjectUdsendingKontakter} from "../../models/udsending-kontakter";



@Component({
  selector: 'app-kontakter',
  templateUrl: './kontakter.component.html',
  styleUrls: ['./kontakter.component.scss']
})
export class KontakterComponent implements OnInit {

  kontaker: StamBladUdSendingKontakt[];
  kontaktTyper: KontaktTyper[];
  kontaktTitlers: KontaktTitler[];

  @Input()
  public  bladid: number;

  from: FormGroup
  constructor(private ks: KontaktService , private  fb: FormBuilder) {
fb.group({

});
  }

  ngOnInit(): void {
    this.UpdateKontakter(this.bladid);
  }


  private  UpdateKontakter(id: number){


    this.ks.GetStamBladUdsendingkontakterById(id).subscribe(value => {
      this.kontaker = value;
      this.kontaktTyper = this.kontaktTyper;
      this.kontaktTitlers = this.kontaktTitlers;
    })
  }


  update() {

   var kontakt: RootObjectUdsendingKontakter  = {
     udsendingKontakter: {bladid: 0, id: 0, mail: 'mail@mail.dk', navn: 'navn', telefonnummer: 0, titel: 0, type: 0}
   }
    this.ks.UpdateKontakt(kontakt).subscribe(value => {

    }, error => {

    });
  }

  saveToArray(Title: string, KontaktType: string, telefonnummer: number, BladId: number, Email: string, Name: string) {

  }
}
