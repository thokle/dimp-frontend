import {Component, Input, OnInit} from '@angular/core';
import {WebAnnoceService} from "../../services/web-annoce.service";
import {WebAnnoce} from "../../models/web-annoce";
import {AnnonceService} from "../../services/annonce.service";

@Component({
  selector: 'app-annonce-kontrol',
  templateUrl: './annonce-kontrol.component.html',
  styleUrls: ['./annonce-kontrol.component.scss']
})
export class AnnonceKontrolComponent implements OnInit {


  @Input()
  value;
  @Input()
  indrykningsUge;
  @Input()
  year;

   annonce: WebAnnoce[] = [];

  constructor(private  ws: AnnonceService) { }

  ngOnInit(): void {
    const split = this.value.split("*");
      this.ws.GetWebAnnonceKontrol(split[0], split[1], split[2]).subscribe(value => {
        this.annonce = value;
        console.log(this.annonce);
      });
  }


  public  send() {

  }
}
