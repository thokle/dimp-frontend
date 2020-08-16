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

  OpretUge(){

  }

  Delete(){

  }

}
