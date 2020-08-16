import {Component, Inject, Input, OnInit} from '@angular/core';
import {KontaktService} from "../../services/kontakt.service";
import {StamBladUdSendingKontakt} from "../../models/stam-blad-ud-sendingkontakt";



@Component({
  selector: 'app-kontakter',
  templateUrl: './kontakter.component.html',
  styleUrls: ['./kontakter.component.scss']
})
export class KontakterComponent implements OnInit {

  kontaker: StamBladUdSendingKontakt[];

  @Input()
  public  mediePlan: number;
  constructor(private ks: KontaktService ) {

  }

  ngOnInit(): void {
    this.UpdateKontakter(this.mediePlan);
  }


  private  UpdateKontakter(id: number){
    this.ks.GetStamBladUdsendingkontakterById(id).subscribe(value => {
      this.kontaker = value;
      console.log(value);
    })
  }
}
