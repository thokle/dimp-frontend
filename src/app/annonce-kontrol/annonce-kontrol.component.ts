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
  selectedId =  0;

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
    ,{
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
      Format: "100x12",
      MedieplanNr: 123123,
      MmType: 0,
      OrdreNr: 1212151,
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
      MedieplanNr: 4444,
      MmType: 0,
      OrdreNr: 121212,
      SidePlacering: 0,
      SlutVist: false,
      Version: 0
    });

  }


  public  go(data: WebAnnoce) {
    const selectedElement= document.getElementById("selected"+data.BladID) as HTMLSelectElement;
   const item=  selectedElement.options.item(selectedElement.options.selectedIndex);
   console.log(item.value);
   const buttonElemet  =  document.getElementById("ok"+data.BladID);
buttonElemet.style.visibility = "hidden"
  const sendButton = document.getElementById("send"+data.BladID);
  sendButton.style.visibility = "visible";
  if (sendButton.style.visibility == "visible"){
    const text = document.getElementById("side"+data.BladID);
    text.style.visibility = "visible";
    const sideTal = Number.parseInt(text.innerText,0);
    this.send(data, sideTal)

    this.ws.UpdateMediePlanNr({update: {OrdreID: data.OrdreNr, Status: this.status }});
    /**
     *  If e.CommandName = "Ok" Then
     Try
     SqlConn.Open()
     SqlComm.CommandText = "UPDATE tblAnnoncekontrol SET ErKontrolleret = 0  WHERE (MedieplanNr = " & OrdreID & ") AND (UgeavisID = " & BladID & ")"
     SqlComm.ExecuteNonQuery()
     Catch ex As Exception
     SqlConn.Close()
     Response.Redirect("FejlEditer.htm")
     Finally
     SqlConn.Close()
     End Try
     ElseIf e.CommandName = "Ja" Then
     FejlIAnnonce = 2
     ElseIf e.CommandName = "Nej" Then
     FejlIAnnonce = 1
     Else
     FejlIAnnonce = 0
     End If
     grdOrdrer.EditItemIndex = e.Item.ItemIndex
     ViewState("FejlIAnnonce") = FejlIAnnonce
     ShowOrdrer()
     End If
     */
  }
  }


  selectedVal(val) {
    console.log("selected value "+ val);
  }

  public send(data: WebAnnoce, sideTal:Number){

    /**

     SqlComm.CommandText = "DELETE FROM tblAnnoncekontrol WHERE (MedieplanNr = " & OrdreID & ") AND (UgeavisID = " & BladID & ")"
     SqlComm.ExecuteNonQuery()

     SqlComm.CommandText = "SELECT DISTINCT COUNT(tblMedieplanLinjer.UgeavisID) AS ManglerKontrol FROM " & _
     "tblMedieplanNr INNER JOIN tblMedieplanLinjer ON tblMedieplanNr.MedieplanNr = tblMedieplanLinjer.MedieplanNr " & _
     "AND tblMedieplanNr.AktivVersion = tblMedieplanLinjer.Version LEFT OUTER JOIN " & _
     "tblAnnoncekontrol ON tblMedieplanLinjer.MedieplanNr = tblAnnoncekontrol.MedieplanNr AND " & _
     "tblMedieplanLinjer.UgeavisID = tblAnnoncekontrol.UgeavisID WHERE " & _
     "(tblMedieplanNr.MedieplanNr = " & OrdreID & ") AND " & _
     "(tblAnnoncekontrol.ErKontrolleret IS NULL OR tblAnnoncekontrol.ErKontrolleret = 0)"

     ManglerKontrol = SqlComm.ExecuteScalar()
     If ManglerKontrol = 0 Then

     SqlComm.CommandText = "SELECT COUNT(MedieplanNr) AS AntalFejl FROM tblAnnoncekontrol " & _
     "WHERE(Fejlkode > 0) And (MedieplanNr = " & OrdreID & ")"
     AntalFejl = SqlComm.ExecuteScalar()
     If AntalFejl = 0 Then

     SqlComm.CommandText = "SELECT tblMedieplan.Fakturering FROM tblMedieplan INNER JOIN tblMedieplanNr ON " & _
     "tblMedieplan.MedieplanNr = tblMedieplanNr.MedieplanNr AND tblMedieplan.Version = tblMedieplanNr.AktivVersion " & _
     "WHERE(tblMedieplanNr.MedieplanNr = " & OrdreID & ")"
     EnOrdre = SqlComm.ExecuteScalar
     If EnOrdre = 1 Then
     Status = 6
     Else
     Status = 99
     End If
     Else
     Status = 5
     End If

     SqlComm.CommandText = "UPDATE tblMedieplan SET Status = " & Status & " FROM tblMedieplan INNER JOIN " & _
     "tblMedieplanNr ON tblMedieplan.MedieplanNr = tblMedieplanNr.MedieplanNr AND tblMedieplan.Version = " & _
     "tblMedieplanNr.AktivVersion WHERE (tblMedieplan.MedieplanNr = " & OrdreID & ")"
     SqlComm.ExecuteNonQuery()
     SqlComm.CommandText = "UPDATE tblMedieplanNr SET Status = " & Status & " WHERE(MedieplanNr = " & OrdreID & ")"
     SqlComm.ExecuteNonQuery()
     End If
     Catch ex As Exception
     SqlConn.Close()
     Response.Redirect("FejlOpdater.htm")
     Finally
     SqlConn.Close()
     End Try
     If ErrorID = 7 Then
     Response.Redirect("ForkertPlacering.aspx" & Request.Url.Query & "*" & OrdreID.ToString)
     End If
     grdOrdrer.EditItemIndex = -1
     ViewState("FejlIAnnonce") = 0
     ShowOrdrer()
     Else
     */
    console.log(this.selectedId);
    var antalfejl;
    var ManglerKontrol;
    this.ws.Delete(data.BladID, data.OrdreNr).subscribe(a =>{


    });
    this.ws.InsertSQL({ insert : {BladID: data.BladID, email: this.email, OrdreID: data.OrdreNr, ErrorID:0, kontrolleretAfDLU: true, SidePlacering: ""+data.SidePlacering}}).subscribe( i => {


    });

    this.ws.GetManglerKontrol(data.OrdreNr).subscribe( ma => {
      ManglerKontrol = ma.toPrecision(0);
    });

    if(ManglerKontrol == 0) {
      this.ws.GetAntalFejl(data.OrdreNr).subscribe(an => {
        antalfejl = an[0];
      });
      if (antalfejl == 0) {
        this.status = 6;

      } else {
        this.status =99;
      }

    } else  {
      this.ws.UpdateMediePlan({update3: { OrdreID: data.OrdreNr, status: this.status}}).subscribe( s => {

        }
      );

      this.ws.UpdateAnnonceKontrol({})

    }


    console.log(data.BladID + ""  + sideTal);
  }

  public  fejl(da: WebAnnoce){
    const selectedElement= document.getElementById("selected"+da.BladID) as HTMLSelectElement;
    const item=  selectedElement.options.item(selectedElement.options.selectedIndex);
   this.selectedId = Number.parseInt(item.value,0);
    console.log(item.value);
    const  fejl  = document.getElementById("selected"+da.BladID);
    fejl.style.visibility = "visible";

    const sendButton = document.getElementById("send"+da.BladID);
    sendButton.style.visibility = "visible";
    const okButton = document.getElementById("ok"+da.BladID);
    okButton.style.visibility = "hidden";
    const text = document.getElementById("side"+da.BladID);
    text.style.visibility = "hidden";

  }


  sendM(data: WebAnnoce) {
    console.log(this.selectedId);
    var antalfejl;
    var ManglerKontrol;
    this.ws.Delete(data.BladID, data.OrdreNr).subscribe(a =>{


    });
    this.ws.InsertSQL({ insert : {BladID: data.BladID, email: this.email, OrdreID: data.OrdreNr, ErrorID:0, kontrolleretAfDLU: true, SidePlacering: ""+data.SidePlacering}}).subscribe( i => {


    });

    this.ws.GetManglerKontrol(data.OrdreNr).subscribe( ma => {
      ManglerKontrol = ma.toPrecision(0);
    });

    if(ManglerKontrol == 0) {
      this.ws.GetAntalFejl(data.OrdreNr).subscribe(an => {
        antalfejl = an[0];
      });
      if (antalfejl == 0) {
        this.status = 6;

      } else {
        this.status =99;
      }
    } else  {


    }


    console.log(data.BladID);
  }
}
