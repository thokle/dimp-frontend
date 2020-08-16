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
  isDeadline1 = false;
  isDeadLine2 = false;
 email = '';
 mediePlanNr;
  stamBladEmail: any;
  bladid;
  type;
  constructor(private router: Router, private  activeRouter: ActivatedRoute) {



  }

  ngOnInit(): void {
    this.activeRouter.queryParamMap.pipe( ).subscribe(value => {


      if(value.has('email')){

        this.stamBladEmail = encodeURI(value.get('email'));
        console.log('App Email  ' + this.stamBladEmail);
        this.isPriser = true;
        this.isKomtakter = false;
      } else  if(value.has('medieplannr')){

        this.mediePlanNr =  Number(value.get('medieplannr'));
        console.log(this.mediePlanNr);
        this.isPriser = false;
        this.isKomtakter = true;
      } else if (value.has('deadlines')){
        this.isPriser= false;
        this.isKomtakter  = false;
        this.isDeadLine2 = false;
        this.isDeadline1 = true;
      }
      else if (value.has('deadlines2')){
        this.isPriser= false;
        this.isKomtakter  = false;
        this.isDeadLine2 = true;
        this.isDeadline1 = false;
      }

    });


  }






}
