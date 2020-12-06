import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WebAnnoceService} from "../../services/web-annoce.service";
import {WebAnnoce} from "../../models/web-annoce";
import {AnnonceService} from "../../services/annonce.service";
import {element} from "protractor";
import {objectLiteralExpression} from "codelyzer/util/astQuery";


@Component({
  selector: 'app-annonce-kontrol',
  templateUrl: './annonce-kontrol.component.html',
  styleUrls: ['./annonce-kontrol.component.scss']
})
export class AnnonceKontrolComponent implements OnInit {


  isSend = false;
  isFejl = false;
  isOk = true
  @ViewChild("fejId")
  fejlId
  erOrdre = 0;
  buttonName = "Ok";
  selectedId = 0;
  sidetal;
  brands = [
    {
      Id: 0,
      name: "Ingen valgt"
    },
    {
      Id: 1,
      name: "Bestilt efter deadline"
    },
    {
      Id: 2,
      name: "Ordre ikke modtaget"
    },
    {
      Id: 3,
      name: "Glemt annonce"
    },
    {
      Id: 4,
      name: "DLU har fremsendt forkert materiale"
    },
    {
      Id: 5,
      name: "Vi har indrykket forkert materiale"
    },
    {
      Id: 6,
      name: "Forkert farve"
    },
    {
      Id: 7,
      name: "Forkert placering"
    }
    , {
      Id: 8,
      name: "Forkert annonce format"
    }, {

      Id: 9,
      name: "Glemt farve"
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
  private status: number;

  constructor(private  ws: AnnonceService) {
  }

  ngOnInit(): void {
    const val = this.value.toString().split("*")
    this.ws.GetWebAnnonceKontrol(val[0], val[1], val[2]).subscribe(value1 => {

      this.annonce = value1;
    });
  }


  public go(data: WebAnnoce) {
    const selectedElement = document.getElementById("selected" + data.OrdreNr) as HTMLSelectElement;
    const item = selectedElement.options.item(selectedElement.options.selectedIndex);
    console.log(item.value);
    const buttonElemet = document.getElementById("ok" + data.OrdreNr);
    buttonElemet.style.visibility = "hidden"
    const sendButton = document.getElementById("send" + data.OrdreNr);
    sendButton.style.visibility = "visible";
    if (sendButton.style.visibility == "visible") {

      const text = document.getElementById("side" + data.OrdreNr) as HTMLInputElement;
      text.style.visibility = "visible";
      var sideTal = Number.parseInt(text.value, 0);
      console.log(text.value);
this.ws.UpdateAnnonceKontrol({ update: { BladID: data.BladID, OrdreID: data.OrdreNr} }).subscribe(value1 => {
  console.log("Update Annonncekontrol =   "+ value1.valueOf())
});
    }

  }


  selectedVal(val) {
    console.log("selected value " + val);
  }




  public fejl(da: WebAnnoce) {
    const selectedElement = document.getElementById("selected" + da.OrdreNr) as HTMLSelectElement;
    const item = selectedElement.options.item(selectedElement.options.selectedIndex);
    this.selectedId = Number.parseInt(item.value, 0);
    console.log(item.value);
    const fejl = document.getElementById("selected" + da.OrdreNr);
    fejl.style.visibility = "visible";

    const sendButton = document.getElementById("send" + da.OrdreNr);
    sendButton.style.visibility = "visible";
    const okButton = document.getElementById("ok" + da.OrdreNr);
    okButton.style.visibility = "hidden";
    const text = document.getElementById("side" + da.OrdreNr);
    text.style.visibility = "visible";
    this.ws.UpdateAnnonceKontrol({update: {OrdreID: da.OrdreNr, BladID: da.BladID}}).subscribe(ac =>{
      console.log(ac.valueOf());
    });
  }


  sendM(data: WebAnnoce ) {
    const text = document.getElementById("side" + data.OrdreNr) as HTMLInputElement;
    console.log("side tal " + text.value);
    this.sidetal = Number.parseInt(text.value);
    console.log(this.selectedId);
    var antalfejl;
    var ManglerKontrol;
    this.ws.Delete(data.OrdreNr, data.BladID).subscribe(a => {
  console.log("Delete :=" + a);
      this.ws.InsertSQL({
        insert: {
          OrdreID: data.OrdreNr,
          SidePlacering: this.sidetal,
          kontrolleretAfDLU: false,
          ErrorID: this.selectedId,
          email: this.value[3],
          BladID: data.BladID
        }
      }).subscribe(ins => {
        if (ins == 1) {
          this.ws.GetManglerKontrol(data.OrdreNr).subscribe(mg => {
            ManglerKontrol = mg;

            if (ManglerKontrol != 0 || ManglerKontrol == 0) {
              this.ws.GetAntalFejl(data.OrdreNr).subscribe(ant => {
                antalfejl = ant;
              }, error => {

              }, ()=>{


                if (antalfejl == 0) {
                  this.ws.SelectFakturing(data.OrdreNr).subscribe(sf => {
                    this.erOrdre = sf;
                  });
                  if (this.erOrdre == 1) {
                    this.status = 6;
                  } else {
                    this.status = 99;
                  }

                } else {
                  this.status = 5;
                }
                this.ws.UpdateMediePlan({update3: {OrdreID: data.OrdreNr, status: this.status}}).subscribe(update => {
                });

                this.ws.UpdateMediePlanNr({update: {Status: this.status, OrdreID: data.OrdreNr}}).subscribe(mpn => {

                });
              });


            }
          })
        }
      }, error => {
        console.log(error.toLocaleString());
      });


      console.log(data.BladID);
    }, error => {

      console.log(error.toLocaleString());
    });


  }
}
