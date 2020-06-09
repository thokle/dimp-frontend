import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PriceWebService} from "../../services/price-web.service";
import {Blad} from "../../models/web-priser";

@Component({
  selector: 'app-priser',
  templateUrl: './priser.component.html',
  styleUrls: ['./priser.component.scss']
})
export class PriserComponent implements OnInit {

   email = "";
  blad: Blad[]
  constructor(private route: ActivatedRoute  , private service: PriceWebService) {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      console.log(params)
    });

  }
  private  SetBladsOnPage(email: string) {
    this.service.GetBlade(email).subscribe(es => this.blad = es, error => {
      console.log(error)
    })
  }
  ngOnInit(): void {
  }

}
