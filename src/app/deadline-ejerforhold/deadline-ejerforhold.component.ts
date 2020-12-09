import {Component, Input, OnInit} from '@angular/core';
import {DeadlineService} from "../../services/deadline.service";
import {Deadline} from "../../models/deadline";
import {EjerforholdDeadline} from "../../models/ejerforhold-deadline";
import {UniversalAnalytics} from "@angular/cli/models/analytics";


export  interface year{
  id;
  year;
}
export interface dato {
  id;
  dato;
}
export interface tid {
  id;
  tid;
}

export  interface  months {
  id;
  name;
}
@Component({
  selector: 'app-deadline-ejerforhold',
  templateUrl: './deadline-ejerforhold.component.html',
  styleUrls: ['./deadline-ejerforhold.component.scss']
})


export class DeadlineEjerforholdComponent implements OnInit {

  @Input()
  ejerforhold;
  deadline: EjerforholdDeadline[] = [];
  navn = '';

  mdr: months[] = [{id:0, name:'Januar' },{id:1, name:'Febuar' },{id:2, name:'Marts' },{id:3, name:'April' },
    {id:4, name:'Maj' },{id:5, name:'Juni' },{id:6, name:'Juli' },{id:7, name:'August' },
    {id:8, name:'September' },{id:9, name:'Oktober' },{id:10, name:'November' },{id:11, name:'December' }]


    //{  'Januar','','', '', '', '','','','','','','']
  year = [];
  do:dato[] = [{id:1, dato:1},{id:2, dato:2},{id:3, dato:3},{id:4, dato:4},,{id:5, dato:5},
    {id:6, dato:6},{id:7, dato:7},{id:8, dato:8},{id:9, dato:9},{id:10, dato:10},{id:11, dato:11}
    ,{id:12, dato:12},{id:13, dato:13},{id:14, dato:14},{id:15, dato:15},{id:16, dato:16},{id:17, dato:17},
    {id:18, dato:18},{id:19, dato:19},{id:20, dato:20},{id:21, dato:21},{id:22, dato:22},{id:23, dato:23},
    {id:24, dato:24},{id:25, dato:25},{id:26, dato:26},{id:27, dato:27},{id:28, dato:28},{id:29, dato:29},
    {id:30, dato:31},{id:31, dato:31}];



  tid : tid[]= [{id:0, tid:'00:00'}, {id:1, tid:'02:00'},{id:2, tid:'03:00'},{id:3, tid:'04:00'},
    {id:4, tid:'05:00'},{id:5, tid:'06:00'},{id:6, tid:'07:00'},{id:7, tid:'08:00'},{id:8, tid:'09:00'},
    {id:9, tid:'10:00'},{id:10, tid:'11:00'},{id:11, tid:'12:00'},{id:12, tid:'13:00'},{id:13, tid:'14:00'},
    {id:14, tid:'15:00'},{id:15, tid:'16:00'},{id:16, tid:'17:00'},{id:17, tid:'18:00'},{id:18, tid:'19:00'},
    {id:19, tid:'20:00'},{id:20, tid:'21:00'},{id:21, tid:'22:00'},{id:22, tid:'23:00'},{id:23, tid:'24:00'}];
  constructor(private ds: DeadlineService) { }

  ngOnInit(): void {
    this.ds.GetDeadlineEjerforhold(this.ejerforhold).subscribe(ej => {
     this.deadline = ej;
    });
  }

  update(l: any) {

  }
}
