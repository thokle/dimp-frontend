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


  isSend = false;
  isFejl = false;
  isOk = true
  title = "CodeSandbox";
  erOrdre = 0;
  buttonName = "Ok";
  selectedId = {};
  owner = [1, 2, 3];
  brands = [
    {
      Id: 1,
      name: "test"
    },
    {
      Id: 2,
      name: "test2"
    },
    {
      Id: 3,
      name: "test3"
    }
  ];


  @Input()
  value;
  @Input()
  indrykningsUge;
  @Input()
  year;
email;
   annonce: WebAnnoce[] = [];

  constructor(private  ws: AnnonceService) { }

  ngOnInit(): void {
    this.annonce.push({
      Annoncor: "test1",
      AnnoncorID: "",
      AntalFarver: 0,
      Betegenelse: "",
      BladID: 2,
      DPKulorID: 0,
      EXPR2: 0,
      ErOrdre: 0,
      Farve: "2",
      FejlID: 0,
      Format: "",
      MedieplanNr: 123123,
      MmType: 0,
      OrdreNr: 0,
      SidePlacering: 0,
      SlutVist: false,
      Version: 0
    });

    this.annonce.push({
      Annoncor: "tets",
      AnnoncorID: "",
      AntalFarver: 0,
      Betegenelse: "",
      BladID: 1,
      DPKulorID: 0,
      EXPR2: 0,
      ErOrdre: 0,
      Farve: "4",
      FejlID: 0,
      Format: "",
      MedieplanNr: 0,
      MmType: 0,
      OrdreNr: 0,
      SidePlacering: 0,
      SlutVist: false,
      Version: 0
    });
    const split = this.value.split("*");

  }


  public  go(data: WebAnnoce) {
   const buttonElemet  =  document.getElementById("ok"+data.BladID);
buttonElemet.style.visibility = "hidden"
  const sendButton = document.getElementById("send"+data.BladID);
  sendButton.style.visibility = "visible";
  if (sendButton.style.visibility == "visible"){
    const text = document.getElementById("side"+data.BladID);
    text.style.visibility = "visible";
    const sideTal = Number.parseInt(text.innerText,0);
    this.send(data, sideTal)
  }
  }


  selectedVal(val) {
    console.log(val);
  }

  public send(data: WebAnnoce, sideTal:Number){
    this.ws.Delete(data.BladID, data.OrdreNr).subscribe(a =>{


    });
    this.ws.InsertSQL({ insert : {BladID: data.BladID, email: this.email, OrdreID: data.OrdreNr, ErrorID:0, kontrolleretAfDLU: true, SidePlacering: ""+data.SidePlacering}}).subscribe( i => {


    });



    console.log(data.BladID + ""  + sideTal);
  }

  public  fejl(da: WebAnnoce){
    const  fejl  = document.getElementById("fejl"+da.BladID);
    fejl.style.visibility = "visible";
    const buttonElemet  =  document.getElementById("ok"+da.BladID);
    buttonElemet.style.visibility = "hidden";
    const sendButton = document.getElementById("send"+da.BladID);
    sendButton.style.visibility = "hidden";
    const text = document.getElementById("side"+da.BladID);
    text.style.visibility = "hidden";

  }

}
