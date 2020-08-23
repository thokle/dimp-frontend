import {Component, Input, OnInit} from '@angular/core';
import {DeadlineService} from "../../services/deadline.service";
import {Deadline} from "../../models/deadline";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})
export class DeadlineComponent implements OnInit {
@Input()
bladid;

@Input()
type

  staus:string[] = [];
  pLlstUdgivelseUge1 = 0;
  pLlstOrdreUge1= 0;
  pLlstOrdreTidUge1='';
  pLlstMaterialeUge1=0;
  pLlstMaterialeTidUge1='';
  pLlstUge1='';

  pLlstUdgivelseUge2=0;
  pLlstOrdreUge2=0;
  pLlstOrdreTidUge2='';
  pLlstMaterialeUge2=0;
  pLlstMaterialeTidUge2='';
  pLlstUge2='';

  pLlstUdgivelseUge3=0;
  pLlstOrdreUge3=0;
  pLlstOrdreTidUge3='';
  pLlstMaterialeUge3=0;
  pLlstMaterialeTidUge3='';
  pLlstUge3='';


  pLlstUdgivelseUge4=0;
  pLlstOrdreUge4=0;
  pLlstOrdreTidUge4='';
  pLlstMaterialeUge4=0;
  pLlstMaterialeTidUge4='';
  pLlstUge4='';

  pLlstOrdreUge5=0;
  pLlstOrdreTidUge5='';
  pLlstUdgivelseUge5=0;
  pLlstMaterialeUge5=0;
  pLlstMaterialeTidUge5='';
  pLlstUge5='';


  pLlstUdgivelseUge6=0;
  pLlstOrdreUge6=0;
  pLlstOrdreTidUge6='';
  pLlstMaterialeUge6=0;
  pLlstMaterialeTidUge6='';
  pLlstUge6='';

  pLlstUdgivelseUge7=0;
  pLlstOrdreUge7=0;
  pLlstOrdreTidUge7='';
  pLlstMaterialeUge7=0;
  pLlstMaterialeTidUge7='';
  pLlstUge7='';


  pLlstUdgivelseUge8=0;
  pLlstOrdreUge8=0;
  pLlstOrdreTidUge8='';
  pLlstMaterialeUge8=0;
  pLlstMaterialeTidUge8='';
  pLlstUge8='';
pLUdkommer1 = false;
  pLUdkommer2 = false;
  pLUdkommer3= false;
  pLUdkommer4= false;
  pLUdkommer5= false;
  pLUdkommer6= false;
  pLUdkommer7= false;
  pLUdkommer8= false;
  list1: Deadline[] = [];
  list2: Deadline[] = [];
  list3: Deadline[] = [];
  list4: Deadline[] = [];
  list5: Deadline[] = [];
  list6: Deadline[] = [];
  list7: Deadline[] = [];
  deadline: Deadline[] = [];
  fg: FormGroup;
  constructor(private  ds: DeadlineService, private  fb: FormBuilder) {
   this.fg =  this.fb.group({
     lstUdgivelseUge1:'',
     lstOrdreUge1:'',
     lstOrdreTidUge1:'',
     lstMaterialeUge1:'',
     lstMaterialeTidUge1:'',
     lstUge1:'',
     lstUdgivelseUge2:'',
     lstOrdreUge2:'',
     lstOrdreTidUge2:'',
     lstMaterialeUge2:'',
     lstMaterialeTidUge2:'',
     lstUge2:'',
     lstUdgivelseUge3:'',
     lstOrdreUge3:'',
     lstOrdreTidUge3:'',
     lstMaterialeUge3:'',
     lstMaterialeTidUge3:'',
     lstUge3:'',
     lstUdgivelseUge4:'',
     lstOrdreUge4:'',
     lstOrdreTidUge4:'',
     lstMaterialeUge4:'',
     lstMaterialeTidUge4:'',
     lstUge4:'',
     lstOrdreUge5:'',
     lstOrdreTidUge5:'',
     lstMaterialeUge5:'',
     lstMaterialeTidUge5:'',
     lstUge5:'',
     lstUdgivelseUge6:'',
     lstOrdreUge6:'',
     lstOrdreTidUge6:'',
     lstMaterialeUge6:'',
     lstMaterialeTidUge6:'',
     lstUge6:'',
     lstUdgivelseUge7:'',
     lstOrdreUge7:'',
     lstOrdreTidUge7:'',
     lstMaterialeUge7:'',
     lstMaterialeTidUge7:'',
     lstUge7:'',
     lstUdgivelseUge8:'',
     lstOrdreUge8:'',
     lstOrdreTidUge8:'',
     lstMaterialeUge8:'',
     lstMaterialeTidUge8:'',
     lstUge8:'',
     chk1:'',
     chk2:'',
     chk3:'',
     chk4:'',
     chk5:'',
     chk6:'',
     chk7:'',
     chk8:'',


    });

  }

  ngOnInit(): void {
    this.ds.GetDeadlimes(this.bladid,  this.type).subscribe(ds => {
      this.deadline = ds;

      ds.forEach( d => {
        this.pLlstUdgivelseUge1 =  d.UdgivelsesDato;
        this.pLlstOrdreUge1 = d.OrdreDeadline;
        this.pLlstOrdreTidUge1 =  d.OrdreTid;
        this.pLlstMaterialeUge1 = d.MaterialeDeadline;
        this.pLlstMaterialeTidUge1 = d.MaterialeTid;
        this.pLlstUge1 = d.Uge;
        this.pLUdkommer1 = d.UdkommerIkke
      });


    });
this.ds.GetDeadlimes(this.bladid, 2).subscribe( ds => {
  this.list1 = ds;
  ds.forEach( d => {

    this.pLlstUdgivelseUge2 = d.UdgivelsesDato;
    this.pLlstOrdreUge2 = d.OrdreDeadline;
    this.pLlstOrdreTidUge2 = d.OrdreTid;
    this.pLlstMaterialeUge2 = d.MaterialeDeadline;
    this.pLlstMaterialeTidUge2 = d.MaterialeTid;
    this.pLlstUge2 = d.Uge;
    this.pLUdkommer2 = d.UdkommerIkke;

  });


});

    this.ds.GetDeadlimes(this.bladid, 3).subscribe( ds => {
      this.list2 = ds;
ds.forEach(d =>{

  this.pLlstUdgivelseUge3 = d.UdgivelsesDato;
  this.pLlstOrdreUge3 = d.OrdreDeadline;
  this.pLlstOrdreTidUge3 = d.OrdreTid;
  this.pLlstMaterialeUge3 = d.MaterialeDeadline;
  this.pLlstMaterialeTidUge3 = d.MaterialeTid;
  this.pLlstUge3 = d.Uge;
  this.pLUdkommer3 = d.UdkommerIkke;

});

    });

    this.ds.GetDeadlimes(this.bladid, 4).subscribe( ds => {
      this.list3 = ds;
      ds.forEach(d =>{

        this.pLlstUdgivelseUge4 = d.UdgivelsesDato;
        this.pLlstOrdreUge4 = d.OrdreDeadline;
        this.pLlstOrdreTidUge4 = d.OrdreTid;
        this.pLlstMaterialeUge4 = d.MaterialeDeadline;
        this.pLlstMaterialeTidUge4 = d.MaterialeTid;
        this.pLlstUge4 = d.Uge;
        this.pLUdkommer4 = d.UdkommerIkke;

      });

    });

    this.ds.GetDeadlimes(this.bladid, 5).subscribe( ds => {
      this.list4 = ds;
      ds.forEach(d =>{

        this.pLlstUdgivelseUge5 = d.UdgivelsesDato;
        this.pLlstOrdreUge5 = d.OrdreDeadline;
        this.pLlstOrdreTidUge5 = d.OrdreTid;
        this.pLlstMaterialeUge5 = d.MaterialeDeadline;
        this.pLlstMaterialeTidUge5 = d.MaterialeTid;
        this.pLlstUge5 = d.Uge;
        this.pLUdkommer5 = d.UdkommerIkke;

      });
    });

    this.ds.GetDeadlimes(this.bladid, 6).subscribe( ds => {
      this.list5 = ds;
      ds.forEach(d =>{

        this.pLlstUdgivelseUge6 = d.UdgivelsesDato;
        this.pLlstOrdreUge6 = d.OrdreDeadline;
        this.pLlstOrdreTidUge6 = d.OrdreTid;
        this.pLlstMaterialeUge6 = d.MaterialeDeadline;
        this.pLlstMaterialeTidUge6 = d.MaterialeTid;
        this.pLlstUge6 = d.Uge;
        this.pLUdkommer6 = d.UdkommerIkke;

      });

    });

    this.ds.GetDeadlimes(this.bladid, 7).subscribe( ds => {
      this.list6 = ds;
      ds.forEach(d =>{

        this.pLlstUdgivelseUge7 = d.UdgivelsesDato;
        this.pLlstOrdreUge7 = d.OrdreDeadline;
        this.pLlstOrdreTidUge7 = d.OrdreTid;
        this.pLlstMaterialeUge7 = d.MaterialeDeadline;
        this.pLlstMaterialeTidUge7 = d.MaterialeTid;
        this.pLlstUge7 = d.Uge;
        this.pLUdkommer7 = d.UdkommerIkke;

      });
    });

    this.ds.GetDeadlimes(this.bladid, 8).subscribe( ds => {
      this.list7= ds;
      ds.forEach(d =>{

        this.pLlstUdgivelseUge8 = d.UdgivelsesDato;
        this.pLlstOrdreUge8 = d.OrdreDeadline;
        this.pLlstOrdreTidUge8 = d.OrdreTid;
        this.pLlstMaterialeUge8 = d.MaterialeDeadline;
        this.pLlstMaterialeTidUge8 = d.MaterialeTid;
        this.pLlstUge8 = d.Uge;
        this.pLUdkommer8 = d.UdkommerIkke;

      });

    });

  }

  /**
   *
   *   SqlComm.CommandText = "INSERT INTO tblWebUdgivelse (BladID, Linje, Uge, UdgivelsesDato, OrdreDeadline, OrdreTid, MaterialeDeadline, MaterialeTid, UdkommerIkke) VALUES (" & BladID.ToString() + ", 1,'" & lstUge1.SelectedItem.ToString() & "'," + lstUdgivelseUge1.SelectedIndex.ToString() + "," + lstOrdreUge1.SelectedIndex.ToString() + ",'" + lstOrdreTidUge1.SelectedItem.ToString() + "'," + lstMaterialeUge1.SelectedIndex.ToString() + ",'" + lstMaterialeTidUge1.SelectedItem.ToString() + "'," + IIf(chkKommerIkke1.Checked, "1", "0") + ")"
   * @constructor
   */
  OpretUge(){
   let lstUdgivelseUge1 = this.fg.get('lstUdgivelseUge1').value;
   let lstOrdreUge1 =  this.fg.get('lstOrdreUge1').value;
   let lstOrdreTidUge1=  this.fg.get('lstOrdreTidUge1').value;
    let lstMaterialeUge1 = this.fg.get('lstMaterialeUge1').value;
  let lstMaterialeTidUge1 =   this.fg.get('lstMaterialeTidUge1').value;
  let lstUge1 =   this.fg.get('lstUge1').value;
    let chk1 =   this.fg.get('chk1').value;


  let update1: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk1, Uge:lstUge1, MaterialeTid: lstMaterialeTidUge1, MaterialeDeadline: lstMaterialeUge1, OrdreTid:lstOrdreTidUge1, OrdreDeadline: lstOrdreUge1, UdgivelsesDato:lstMaterialeUge1};
    this.ds.Post(update1).subscribe(s => {


    });
   let lstUdgivelseUge2 =  this.fg.get('lstUdgivelseUge2').value;
    let lstOrdreUge2 =   this.fg.get('lstOrdreUge2').value;
  let lstOrdreTidUge2 =   this.fg.get('lstOrdreTidUge2').value;
  let lstMaterialeUge2  =  this.fg.get('lstMaterialeUge2').value;
 let lstMaterialeTidUge2 =   this.fg.get('lstMaterialeTidUge2').value;
  let lstUge2 =   this.fg.get('lstUge2').value;
    let chk2 =  this.fg.get('chk2').value;

    let update2: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk2, Uge:lstUge2, MaterialeTid: lstMaterialeTidUge2, MaterialeDeadline: lstMaterialeUge2, OrdreTid:lstOrdreTidUge2, OrdreDeadline: lstOrdreUge2, UdgivelsesDato:lstMaterialeUge2};

this.ds.Post(update2).subscribe(s => {


});
    let lstUdgivelseUge3 =  this.fg.get('lstUdgivelseUge3').value;
    let lstOrdreUge3 =   this.fg.get('lstOrdreUge3').value;
    let lstOrdreTidUge3 =   this.fg.get('lstOrdreTidUge3').value;
    let lstMaterialeUge3  =  this.fg.get('lstMaterialeUge3').value;
    let lstMaterialeTidUge3 =   this.fg.get('lstMaterialeTidUge3').value;
    let lstUge3 =   this.fg.get('lstUge3').value;
    let chk3 =  this.fg.get('chk3').value;

    let update3: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk3, Uge:lstUge3, MaterialeTid: lstMaterialeTidUge3, MaterialeDeadline: lstMaterialeUge3, OrdreTid:lstOrdreTidUge3, OrdreDeadline: lstOrdreUge3, UdgivelsesDato:lstMaterialeUge3};
this.ds.Post(update3).subscribe(s => {

}, error => {

});
    let lstUdgivelseUge4 =   this.fg.get('lstUdgivelseUge4').value;
 let lstOrdreUge4 =    this.fg.get('lstOrdreUge4').value;
 let lstOrdreTidUge4 =    this.fg.get('lstOrdreTidUge4').value;
  let lstMaterialeUge4 =   this.fg.get('lstMaterialeUge4').value;
 let lstMaterialeTidUge4 =    this.fg.get('lstMaterialeTidUge4').value;
 let lstUge4 =    this.fg.get('lstUge4').value;
    let chk4 =   this.fg.get('chk4').value;

    let update4: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk4, Uge:lstUge4, MaterialeTid: lstMaterialeTidUge4, MaterialeDeadline: lstMaterialeUge4, OrdreTid:lstOrdreTidUge4, OrdreDeadline: lstOrdreUge4, UdgivelsesDato:lstMaterialeUge4};
this.ds.Post(update4).subscribe(s => {

});
    let lstOrdreUge5  =   this.fg.get('lstOrdreUge5').value;
 let lstOrdreTidUge5 =    this.fg.get('lstOrdreTidUge5').value;
  let lstMaterialeUge5 =   this.fg.get('lstMaterialeUge5').value;
  let lstMaterialeTidUge5  =  this.fg.get('lstMaterialeTidUge5').value;
    let chk5 =  this.fg.get('chk5').value;
    let lstUge5 = this.fg.get('lstUge5').value;
    let update5: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk5, Uge:lstUge5, MaterialeTid: lstMaterialeTidUge5, MaterialeDeadline: lstMaterialeUge5, OrdreTid:lstOrdreTidUge5, OrdreDeadline: lstOrdreUge5, UdgivelsesDato:lstMaterialeUge5};
this.ds.Post(update5).subscribe(s => {

});

  let lstUdgivelseUge6 =  this.fg.get('lstUdgivelseUge6').value;
    let lstOrdreUge6 = this.fg.get('lstOrdreUge6').value;
  let lstOrdreTidUge6 =   this.fg.get('lstOrdreTidUge6').value;
   let lstMaterialeUge6 =  this.fg.get('lstMaterialeUge6').value;
   let lstMaterialeTidUge6 =  this.fg.get('lstMaterialeTidUge6').value;
   let lstUge6 =  this.fg.get('lstUge6').value;
    let chk6 =   this.fg.get('chk6').value;

    let update6: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk6, Uge:lstUge6, MaterialeTid: lstMaterialeTidUge6, MaterialeDeadline: lstMaterialeUge6, OrdreTid:lstOrdreTidUge6, OrdreDeadline: lstOrdreUge6, UdgivelsesDato:lstMaterialeUge6};
this.ds.Post(update6).subscribe(s => {

});
    let lstUdgivelseUge7 =   this.fg.get('lstUdgivelseUge7').value;
 let lstOrdreUge7 =    this.fg.get('lstOrdreUge7').value;
  let lstOrdreTidUge7 =   this.fg.get('lstOrdreTidUge7').value;
   let lstMaterialeUge7 =  this.fg.get('lstMaterialeUge7').value;
 let lstMaterialeTidUge7 =   this.fg.get('lstMaterialeTidUge7').value;
  let lstUge7 =   this.fg.get('lstUge7').value;
    let chk7 =  this.fg.get('chk7').value;

    let update7: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk7, Uge:lstUge7, MaterialeTid: lstMaterialeTidUge7, MaterialeDeadline: lstMaterialeUge7, OrdreTid:lstOrdreTidUge7, OrdreDeadline: lstOrdreUge7, UdgivelsesDato:lstMaterialeUge7};
    this.ds.Post(update7).subscribe(s => {

    });
    let lstUdgivelseUge8 =    this.fg.get('lstUdgivelseUge8').value;
  let lstOrdreUge8 =   this.fg.get('lstOrdreUge8').value;
  let lstOrdreTidUge8 =  this.fg.get('lstOrdreTidUge8').value;
  let lstMaterialeUge8 =   this.fg.get('lstMaterialeUge8').value;
 let lstMaterialeTidUge8 =    this.fg.get('lstMaterialeTidUge8').value;
   let lstUge8 =  this.fg.get('lstUge8').value;
    let chk8 =  this.fg.get('chk8').value;
    let update8: Deadline = {BladId: this.bladid ,   UdkommerIkke:chk8, Uge:lstUge8, MaterialeTid: lstMaterialeTidUge8, MaterialeDeadline: lstMaterialeUge8, OrdreTid:lstOrdreTidUge8, OrdreDeadline: lstOrdreUge8, UdgivelsesDato:lstMaterialeUge8};

this.ds.Post(update8).subscribe(s => {

});

  }

  Delete(){

  }

}
