import {Component, NgZone, OnInit} from '@angular/core';


import {ActivatedRoute, Router, RouterState, RouterStateSnapshot} from "@angular/router";
import {tokenReference} from "@angular/compiler";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";
import {KontakterComponent} from "./kontakter/kontakter.component";

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

  type;
  isAnnoncekontrol= false;

  value2: any;
  ejerforhold: any;
  isEjerforhold: boolean = false;


  constructor(private router: Router, private  activeRouter: ActivatedRoute) {




    }

  ngOnInit(): void {



    /*
    this.activeRouter.queryParamMap.pipe( ).subscribe(value => {


      if(value.has('email')){

        this.stamBladEmail = encodeURI(value.get('email'));
        console.log('App Email  ' + this.stamBladEmail);
        this.isPriser = true;

        this.isEjerforhold = false;
        this.isKomtakter = false;
        this.isEjerforhold = false;
        this.isPriser= false;
        this.isDeadLine2 = false;
        this.isDeadline1 = false;
        this.isAnnoncekontrol = false;
        this.isEjerforhold = false;
      } else  if(value.has('bladid')){

        this.bladid =  Number(value.get('bladid'));
        console.log(this.bladid);
        this.isPriser = false;
        this.isKomtakter = false;
        this.isEjerforhold = false;
        this.isPriser= false;

        this.isDeadLine2 = false;
        this.isDeadline1 = false;
        this.isAnnoncekontrol = false;
        this.isEjerforhold = false;
      } else if (value.has('deadlines')){
        this.bladid = Number(value.get('deadlines'));
        this.isPriser= false;
        this.isKomtakter  = false;
        this.isDeadLine2 = false;
        this.isDeadline1 = true;
        this.isEjerforhold = false;
        this.isKomtakter = false;
      }
      else if (value.has('deadlines2')){
        this.bladid = Number(value.get('deadlines2'));
        this.isPriser= false;
        this.isKomtakter  = false;
        this.isDeadLine2 = true;
        this.isDeadline1 = false;
        this.isEjerforhold = false;
      } else if (value.has('annoncekontrol')){
        const val = value.get('annoncekontrol');
        this.value2 =  val;
        this.isPriser= false;
        this.isKomtakter  = false;
        this.isDeadLine2 = false;
        this.isDeadline1 = false;
        this.isAnnoncekontrol = true;
        this.isEjerforhold = false;
      } else  if(value.has('kontakt')){
        this.bladid  = value.get('kontakt');

        this.isPriser= false;
        this.isKomtakter  = true;
        this.isDeadLine2 = false;
        this.isDeadline1 = false;
        this.isAnnoncekontrol = false;
        this.isEjerforhold = false;
      } else  if(value.has('ejerforhold')){
        this.ejerforhold = value.get('ejerforhold');
        this.isPriser= false;
        this.isKomtakter  = false;
        this.isDeadLine2 = false;
        this.isDeadline1 = false;
        this.isAnnoncekontrol = false;
        this.isEjerforhold = true;
      }

    });*/


  }






}
