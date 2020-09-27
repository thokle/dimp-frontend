import {Component, Inject, Input, OnInit} from '@angular/core';
import {KontaktService} from "../../services/kontakt.service";
import {KontaktTitler, KontaktTyper, StamBladUdSendingKontakt} from "../../models/stam-blad-ud-sendingkontakt";
import {FormBuilder, FormGroup} from "@angular/forms";



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
  public  mediePlan: number;

  from: FormGroup
  constructor(private ks: KontaktService , private  fb: FormBuilder) {
fb.group({

});
  }

  ngOnInit(): void {
    this.UpdateKontakter(this.mediePlan);
  }


  private  UpdateKontakter(id: number){
    this.ks.GetStamBladUdsendingkontakterById(id).subscribe(value => {
      this.kontaker = value;
      this.kontaktTyper = this.kontaktTyper;
      this.kontaktTitlers = this.kontaktTitlers;
    })
  }


  update() {
    this.ks.
  }
}
