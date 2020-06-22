import {Component, NgZone, OnInit} from '@angular/core';


import {ActivatedRoute, Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {tokenReference} from "@angular/compiler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {


  isPriser = false;
  isKomtakter = false;
 email = '';

  constructor(private router: Router, private  activeRouter: ActivatedRoute) {
      this.activeRouter.queryParamMap.subscribe( value => {
      if(value.has('email')){
        this.email = value.get('email');
        this.isPriser = true;
        this.isKomtakter = false;
      } else {
        this.isPriser = false;
        this.isKomtakter = true;
      }

    });


  }

  ngOnInit(): void {



  }






}
