import {Component, Input, OnInit} from '@angular/core';
import {DeadlineService} from "../../services/deadline.service";
import {Deadline} from "../../models/deadline";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

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


  deadline: Deadline[] = [];
  fg: FormGroup;
  constructor(private  ds: DeadlineService, private  fb: FormBuilder) {
   this.fg =  new FormGroup({
     lstUdgivelseUge1:new FormControl(''),
     lstOrdreUge1:new FormControl(''),
     lstOrdreTidUge1:new FormControl(''),
     lstMaterialeUge1:new FormControl(''),
     lstMaterialeTidUge1:new FormControl(''),
     lstUge1:new FormControl(''),
     lstUdgivelseUge2:new FormControl(''),
     lstOrdreUge2:new FormControl(''),
     lstOrdreTidUge2:new FormControl(''),
     lstMaterialeUge2:new FormControl(''),
     lstMaterialeTidUge2:new FormControl(''),
     lstUge2:new FormControl(''),
     lstUdgivelseUge3:new FormControl(''),
     lstOrdreUge3:new FormControl(''),
     lstOrdreTidUge3:new FormControl(''),
     lstMaterialeUge3:new FormControl(''),
     lstMaterialeTidUge3:new FormControl(''),
     lstUge3:new FormControl(''),
     lstUdgivelseUge4:new FormControl(''),
     lstOrdreUge4:new FormControl(''),
     lstOrdreTidUge4:new FormControl(''),
     lstMaterialeUge4:new FormControl(''),
     lstMaterialeTidUge4:new FormControl(''),
     lstUdgivelseUge5: new FormControl(),
     lstUge4:new FormControl(''),
     lstOrdreUge5:new FormControl(''),
     lstOrdreTidUge5:new FormControl(''),
     lstMaterialeUge5:new FormControl(''),
     lstMaterialeTidUge5:new FormControl(''),
     lstUge5:new FormControl(''),
     lstUdgivelseUge6:new FormControl(''),
     lstOrdreUge6:new FormControl(''),
     lstOrdreTidUge6:new FormControl(''),
     lstMaterialeUge6:new FormControl(''),
     lstMaterialeTidUge6:new FormControl(''),
     lstUge6:new FormControl(''),
     lstUdgivelseUge7:new FormControl(''),
     lstOrdreUge7:new FormControl(''),
     lstOrdreTidUge7:new FormControl(''),
     lstMaterialeUge7:new FormControl(''),
     lstMaterialeTidUge7:new FormControl(''),
     lstUge7:new FormControl(''),
     lstUdgivelseUge8:new FormControl(''),
     lstOrdreUge8:new FormControl(''),
     lstOrdreTidUge8:new FormControl(''),
     lstMaterialeUge8:new FormControl(''),
     lstMaterialeTidUge8:new FormControl(''),
     lstUge8:new FormControl(''),
     chk1:new FormControl(''),
     chk2:new FormControl(''),
     chk3:new FormControl(''),
     chk4:new FormControl(''),
     chk5:new FormControl(''),
     chk6:new FormControl(''),
     chk7:new FormControl(''),
     chk8:new FormControl('')


    });

  }

  ngOnInit(): void {
    this.getData();
  }


  OpretUge(){
this.Delete();
   let lstUdgivelseUge1 = this.fg.get('lstUdgivelseUge1').value;
   let lstOrdreUge1 =  this.fg.get('lstOrdreUge1').value;
   let lstOrdreTidUge1=  this.fg.get('lstOrdreTidUge1').value;
    let lstMaterialeUge1 = this.fg.get('lstMaterialeUge1').value;
  let lstMaterialeTidUge1 =   this.fg.get('lstMaterialeTidUge1').value;
  let lstUge1 =   this.fg.get('lstUge1').value;
    let chk1 =   this.fg.get('chk1').value;


  let update1: Deadline = { dead: {BladID: this.bladid ,Linje: 1,  UdkommerIkke:chk1, Uge:lstUge1, MaterialeTid: lstMaterialeTidUge1, MaterialeDeadline: lstMaterialeUge1, OrdreTid:lstOrdreTidUge1, OrdreDeadline: lstOrdreUge1, UdgivelsesDato:lstMaterialeUge1}};
    this.ds.Post(update1).subscribe(s => {
    this.staus.push(s);

    },error => {});
   let lstUdgivelseUge2 =  this.fg.get('lstUdgivelseUge2').value;
    let lstOrdreUge2 =   this.fg.get('lstOrdreUge2').value;
  let lstOrdreTidUge2 =   this.fg.get('lstOrdreTidUge2').value;
  let lstMaterialeUge2  =  this.fg.get('lstMaterialeUge2').value;
 let lstMaterialeTidUge2 =   this.fg.get('lstMaterialeTidUge2').value;
  let lstUge2 =   this.fg.get('lstUge2').value;
    let chk2 =  this.fg.get('chk2').value;

    let update2: Deadline = { dead: {BladID: this.bladid , Linje: 2, UdkommerIkke:chk2, Uge:lstUge2, MaterialeTid: lstMaterialeTidUge2, MaterialeDeadline: lstMaterialeUge2, OrdreTid:lstOrdreTidUge2, OrdreDeadline: lstOrdreUge2, UdgivelsesDato:lstMaterialeUge2}};

this.ds.Post(update2).subscribe(s => {


});
    let lstUdgivelseUge3 =  this.fg.get('lstUdgivelseUge3').value;
    let lstOrdreUge3 =   this.fg.get('lstOrdreUge3').value;
    let lstOrdreTidUge3 =   this.fg.get('lstOrdreTidUge3').value;
    let lstMaterialeUge3  =  this.fg.get('lstMaterialeUge3').value;
    let lstMaterialeTidUge3 =   this.fg.get('lstMaterialeTidUge3').value;
    let lstUge3 =   this.fg.get('lstUge3').value;
    let chk3 =  this.fg.get('chk3').value;

    let update3: Deadline = { dead: {BladID: this.bladid , Linje: 3,  UdkommerIkke:chk3, Uge:lstUge3, MaterialeTid: lstMaterialeTidUge3, MaterialeDeadline: lstMaterialeUge3, OrdreTid:lstOrdreTidUge3, OrdreDeadline: lstOrdreUge3, UdgivelsesDato:lstMaterialeUge3}};
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

    let update4: Deadline = { dead: {BladID: this.bladid , Linje: 4,   UdkommerIkke:chk4, Uge:lstUge4, MaterialeTid: lstMaterialeTidUge4, MaterialeDeadline: lstMaterialeUge4, OrdreTid:lstOrdreTidUge4, OrdreDeadline: lstOrdreUge4, UdgivelsesDato:lstMaterialeUge4}};
this.ds.Post(update4).subscribe(s => {

});
    let lstOrdreUge5  =   this.fg.get('lstOrdreUge5').value;
 let lstOrdreTidUge5 =    this.fg.get('lstOrdreTidUge5').value;
  let lstMaterialeUge5 =   this.fg.get('lstMaterialeUge5').value;
  let lstMaterialeTidUge5  =  this.fg.get('lstMaterialeTidUge5').value;
    let chk5 =  this.fg.get('chk5').value;
    let lstUge5 = this.fg.get('lstUge5').value;
    let update5: Deadline = { dead: {BladID: this.bladid ,  Linje: 5 ,UdkommerIkke:chk5, Uge:lstUge5, MaterialeTid: lstMaterialeTidUge5, MaterialeDeadline: lstMaterialeUge5, OrdreTid:lstOrdreTidUge5, OrdreDeadline: lstOrdreUge5, UdgivelsesDato:lstMaterialeUge5}};
this.ds.Post(update5).subscribe(s => {

});

  let lstUdgivelseUge6 =  this.fg.get('lstUdgivelseUge6').value;
    let lstOrdreUge6 = this.fg.get('lstOrdreUge6').value;
  let lstOrdreTidUge6 =   this.fg.get('lstOrdreTidUge6').value;
   let lstMaterialeUge6 =  this.fg.get('lstMaterialeUge6').value;
   let lstMaterialeTidUge6 =  this.fg.get('lstMaterialeTidUge6').value;
   let lstUge6 =  this.fg.get('lstUge6').value;
    let chk6 =   this.fg.get('chk6').value;

    let update6: Deadline = { dead: {BladID: this.bladid , Linje: 6,  UdkommerIkke:chk6, Uge:lstUge6, MaterialeTid: lstMaterialeTidUge6, MaterialeDeadline: lstMaterialeUge6, OrdreTid:lstOrdreTidUge6, OrdreDeadline: lstOrdreUge6, UdgivelsesDato:lstMaterialeUge6}};
this.ds.Post(update6).subscribe(s => {

});
    let lstUdgivelseUge7 =   this.fg.get('lstUdgivelseUge7').value;
 let lstOrdreUge7 =    this.fg.get('lstOrdreUge7').value;
  let lstOrdreTidUge7 =   this.fg.get('lstOrdreTidUge7').value;
   let lstMaterialeUge7 =  this.fg.get('lstMaterialeUge7').value;
 let lstMaterialeTidUge7 =   this.fg.get('lstMaterialeTidUge7').value;
  let lstUge7 =   this.fg.get('lstUge7').value;
    let chk7 =  this.fg.get('chk7').value;

    let update7: Deadline = { dead: {BladID: this.bladid ,  Linje:7, UdkommerIkke:chk7, Uge:lstUge7, MaterialeTid: lstMaterialeTidUge7, MaterialeDeadline: lstMaterialeUge7, OrdreTid:lstOrdreTidUge7, OrdreDeadline: lstOrdreUge7, UdgivelsesDato:lstMaterialeUge7}};
    this.ds.Post(update7).subscribe(s => {

    });
    let lstUdgivelseUge8 =    this.fg.get('lstUdgivelseUge8').value;
  let lstOrdreUge8 =   this.fg.get('lstOrdreUge8').value;
  let lstOrdreTidUge8 =  this.fg.get('lstOrdreTidUge8').value;
  let lstMaterialeUge8 =   this.fg.get('lstMaterialeUge8').value;
 let lstMaterialeTidUge8 =    this.fg.get('lstMaterialeTidUge8').value;
   let lstUge8 =  this.fg.get('lstUge8').value;
    let chk8 =  this.fg.get('chk8').value;
    let update8: Deadline = { dead: {BladID: this.bladid , Linje: 8,  UdkommerIkke:chk8, Uge:lstUge8, MaterialeTid: lstMaterialeTidUge8, MaterialeDeadline: lstMaterialeUge8, OrdreTid:lstOrdreTidUge8, OrdreDeadline: lstOrdreUge8, UdgivelsesDato:lstMaterialeUge8}};

this.ds.Post(update8).subscribe(s => {

});

  }

  Delete(){
   this.ds.Delete(this.bladid, 1).subscribe(value => {
     console.log()
   });
    this.ds.Delete(this.bladid, 2).subscribe(value => {
      console.log()
    });
    this.ds.Delete(this.bladid, 3).subscribe(value => {
      console.log()
    });
    this.ds.Delete(this.bladid, 4).subscribe(value => {
      console.log()
    });
    this.ds.Delete(this.bladid, 5).subscribe(value => {
      console.log()
    });
    this.ds.Delete(this.bladid, 6).subscribe(value => {
      console.log()
    });
    this.ds.Delete(this.bladid, 7).subscribe(value => {
      console.log()
    });
    this.ds.Delete(this.bladid, 8).subscribe(value => {
      console.log()
    });
  }
  getData() {
    this.ds.GetDeadlimes(this.bladid,  1).subscribe(ds => {

      ds.forEach( d => {
        this.fg.get('lstUge1').setValue( d.Uge);
       this.fg.get('lstUdgivelseUge1').setValue(d.UdgivelsesDato);
       this.fg.get('lstOrdreUge1').setValue(d.OrdreDeadline);
this.fg.get('lstMaterialeUge1').setValue(d.MaterialeDeadline);
       this.fg.get('lstOrdreTidUge1').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge1').setValue(d.MaterialeTid);
        this.fg.get('chk1').setValue(d.UdkommerIkke);


      });


    });
    this.ds.GetDeadlimes(this.bladid, 2).subscribe( ds => {

      ds.forEach( d => {

        this.fg.get('lstUge2').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge2').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge2').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge2').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge2').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge2').setValue(d.MaterialeTid);
        this.fg.get('chk2').setValue(d.UdkommerIkke);
      });


    });

    this.ds.GetDeadlimes(this.bladid, 3).subscribe( ds => {

      ds.forEach(d =>{

        this.fg.get('lstUge3').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge3').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge3').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge3').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge3').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge3').setValue(d.MaterialeTid);
        this.fg.get('chk3').setValue(d.UdkommerIkke);

      });

    });

    this.ds.GetDeadlimes(this.bladid, 4).subscribe( ds => {

      ds.forEach(d =>{

        this.fg.get('lstUge4').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge4').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge4').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge4').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge4').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge4').setValue(d.MaterialeTid);
        this.fg.get('chk4').setValue(d.UdkommerIkke);

      });

    });

    this.ds.GetDeadlimes(this.bladid, 5).subscribe( ds => {

      ds.forEach(d =>{

        this.fg.get('lstUge5').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge5').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge5').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge5').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge5').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge5').setValue(d.MaterialeTid);
        this.fg.get('chk5').setValue(d.UdkommerIkke);

      });
    });

    this.ds.GetDeadlimes(this.bladid, 6).subscribe( ds => {

      ds.forEach(d =>{

        this.fg.get('lstUge6').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge6').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge6').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge6').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge6').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge6').setValue(d.MaterialeTid);
        this.fg.get('chk6').setValue(d.UdkommerIkke);

      });

    });

    this.ds.GetDeadlimes(this.bladid, 7).subscribe( ds => {

      ds.forEach(d =>{

        this.fg.get('lstUge7').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge7').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge7').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge7').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge7').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge7').setValue(d.MaterialeTid);
        this.fg.get('chk7').setValue(d.UdkommerIkke);

      });
    });

    this.ds.GetDeadlimes(this.bladid, 8).subscribe( ds => {

      ds.forEach(d =>{

        this.fg.get('lstUge8').setValue( d.Uge);
        this.fg.get('lstUdgivelseUge8').setValue(d.UdgivelsesDato);
        this.fg.get('lstOrdreUge8').setValue(d.OrdreDeadline);
        this.fg.get('lstMaterialeUge8').setValue(d.MaterialeDeadline);
        this.fg.get('lstOrdreTidUge8').setValue(d.OrdreTid);
        this.fg.get('lstMaterialeTidUge8').setValue(d.MaterialeTid);
        this.fg.get('chk8').setValue(d.UdkommerIkke);

      });

    });

  }
}
