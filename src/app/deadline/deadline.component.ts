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


  pLlstUdgivelseUge1;
  pLlstOrdreUge1;
  pLlstOrdreTidUge1;
  pLlstMaterialeUge1;
  pLlstMaterialeTidUge1;

  pLlstUge1;
  pLlstUdgivelseUge2;
  pLlstOrdreUge2;
  pLlstOrdreTidUge2;
  pLlstMaterialeUge2;

  pLlstMaterialeTidUge2;
  pLlstUge2;
  pLlstUdgivelseUge3;
  pLlstOrdreUge3;
  pLlstOrdreTidUge3;
  pLlstMaterialeUge3;
  pLlstMaterialeTidUge3;
  pLlstUge3;
  pLlstUdgivelseUge4;
  pLlstOrdreUge4;
  pLlstOrdreTidUge4;
  pLlstMaterialeUge4;
  pLlstMaterialeTidUge4;
  pLlstUge4;
  pLlstOrdreUge5;
  pLlstOrdreTidUge5;
  pLlstUdgivelseUge5
  pLlstMaterialeUge5;
  pLlstMaterialeTidUge5;
  pLlstUge5;
  pLlstUdgivelseUge6;
  pLlstOrdreUge6;
  pLlstOrdreTidUge6;
  pLlstMaterialeUge6;
  pLlstMaterialeTidUge6;
  pLlstUge6;
  pLlstUdgivelseUge7;
  pLlstOrdreUge7;
  pLlstOrdreTidUge7;
  pLlstMaterialeUge7;
  pLlstMaterialeTidUge7;
  pLlstUge7;
  pLlstUdgivelseUge8;
  pLlstOrdreUge8;
  pLlstOrdreTidUge8;
  pLlstMaterialeUge8;
  pLlstMaterialeTidUge8;
  pLlstUge8;

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
    });

  }

  ngOnInit(): void {
    this.ds.GetDeadlimes(this.bladid,  this.type).subscribe(ds => {
      this.deadline = ds;
      this.pLlstUdgivelseUge1;
      this.pLlstOrdreUge1;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;

    });
this.ds.GetDeadlimes(this.bladid, 2).subscribe( ds => {
  this.list1 = ds;
  this.pLlstUdgivelseUge2;
  this.pLlstOrdreUge2;
  this.pLlstOrdreTidUge2;
  this.pLlstMaterialeUge2;
  this.pLlstMaterialeTidUge2;
  this.pLlstUge2;

});

    this.ds.GetDeadlimes(this.bladid, 3).subscribe( ds => {
      this.list2 = ds;

      this.pLlstUdgivelseUge3;
      this.pLlstOrdreUge3;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;
    });

    this.ds.GetDeadlimes(this.bladid, 4).subscribe( ds => {
      this.list3 = ds;
      this.pLlstUdgivelseUge1;
      this.pLlstOrdreUge1;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;

    });

    this.ds.GetDeadlimes(this.bladid, 5).subscribe( ds => {
      this.list4 = ds;
      this.pLlstUdgivelseUge1;
      this.pLlstOrdreUge1;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;
    });

    this.ds.GetDeadlimes(this.bladid, 6).subscribe( ds => {
      this.list5 = ds;
      this.pLlstUdgivelseUge1;
      this.pLlstOrdreUge1;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;

    });

    this.ds.GetDeadlimes(this.bladid, 7).subscribe( ds => {
      this.list6 = ds;
      this.pLlstUdgivelseUge1;
      this.pLlstOrdreUge1;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;

    });

    this.ds.GetDeadlimes(this.bladid, 8).subscribe( ds => {
      this.list7= ds;
      this.pLlstUdgivelseUge1;
      this.pLlstOrdreUge1;
      this.pLlstOrdreTidUge1;
      this.pLlstMaterialeUge1;
      this.pLlstMaterialeTidUge1;
      this.pLlstUge1;

    });

  }

  OpretUge(){

  }

  Delete(){

  }

}
