import {Component, Input, OnInit} from '@angular/core';
import {DeadlineService} from "../../services/deadline.service";
import {Dead, Deadline} from "../../models/deadline";
import {EjerforholdDeadline} from "../../models/ejerforhold-deadline";
import {UniversalAnalytics} from "@angular/cli/models/analytics";


  interface Year{
  id;
  year;
}
 interface Dato {
  id;
  date;
}
 interface Tid {
  id;
  tid;
}

  interface  Months {
  id;
  name;
}
interface  Week {
    id;
    weeknumber;
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

  dates: Dato[] = [{id:'1', date:'1'},{id:'2', date:'2'},{id:'3', date:'3'},{id:'4', date:'4'},{id:'5', date:'5'},
    {id:'6', date:'6'},{id:'7', date:'7'},{id:'8', date:'8'},{id:'9', date:'9'},{id:'10', date:'10'},{id:'11', date:'11'}
    ,{id:'12', date:'12'},{id:'13', date:'13'},{id:'14', date:'14'},{id:'15', date:'15'},{id:'16', date:'16'},{id:'17', date:'17'},
    {id:'18', date:'18'},{id:'19', date:'19'},{id:'20', date:'20'},{id:'21', date: '21'},{id:'22', date:'22'},{id:'23', date:'23'},
    {id:'24', date:'24'},{id:'25', date:'25'},{id:'26', date:'26'},{id:'27', date:'27'},{id:'28', date:'28'},{id:'29', date:'29'},
    {id:'30', date:'30'},{id:'31', date:'31'}];


  mdr: Months[] = [{id:0, name:'Januar' },{id:1, name:'Febuar' },{id:2, name:'Marts' },{id:3, name:'April' },
    {id:4, name:'Maj' },{id:5, name:'Juni' },{id:6, name:'Juli' },{id:7, name:'August' },
    {id:8, name:'September' },{id:9, name:'Oktober' },{id:10, name:'November' },{id:11, name:'December' }]


    //{  'Januar','','', '', '', '','','','','','','']
  weeks: Week[] = [];




  tid : Tid[]= [{id:0, tid:'00:00'}, {id:1, tid:'02:00'},{id:2, tid:'03:00'},{id:3, tid:'04:00'},
    {id:4, tid:'05:00'},{id:5, tid:'06:00'},{id:6, tid:'07:00'},{id:7, tid:'08:00'},{id:8, tid:'09:00'},
    {id:9, tid:'10:00'},{id:10, tid:'11:00'},{id:11, tid:'12:00'},{id:12, tid:'13:00'},{id:13, tid:'14:00'},
    {id:14, tid:'15:00'},{id:15, tid:'16:00'},{id:16, tid:'17:00'},{id:17, tid:'18:00'},{id:18, tid:'19:00'},
    {id:19, tid:'20:00'},{id:20, tid:'21:00'},{id:21, tid:'22:00'},{id:22, tid:'23:00'},{id:23, tid:'24:00'}];
  constructor(private ds: DeadlineService) {



  }

  ngOnInit(): void {
this.getWeekNumber();



    console.log(this.dates);
    this.ds.GetDeadlineEjerforhold(this.ejerforhold).subscribe(ej => {
     this.deadline = ej;
    });


  }

  update(l: any) {
    this.deadline.forEach(value =>
    {
    value.Deadliens.forEach(value1 => {

      this.ds.Post({dead: value1});
    });

    });
  }
   getWeekNumber() {
     for(let i=1; i<=52; i++){
       this.weeks.push({id:i,  weeknumber: i});
     }
  }

  selectedWeek($event: Event, l: Dead) {
    var sel = document.getElementById("Week"+l.BladID) as HTMLSelectElement;
     this.deadline.find(value => {
     let index =  value.Deadliens.findIndex( value1 => {
        value1.Uge === l.Uge
      });
     value.Deadliens[index].Uge =  String(sel.value);

    });

  }

  selectUdGivelsesDato($event: Event, l: Dead) {


    this.deadline.find(value => {
    let index =  value.Deadliens.findIndex(value1 => {
        value1.UdgivelsesDato == l.UdgivelsesDato && value1.BladID == l.BladID;
      } );

      value[index].UdgivelsesDato = 0;
    })
  }

  selectedOrdreDeadline($event: Event, l: Dead) {
let sel = document.getElementById('OrdreDeadLine'+l.BladID);

this.deadline.forEach(value => {

});
  }

  selectedUdgivelsesDato($event: Event, l: Dead) {

  }

  selectOdreTid($event: Event, l: Dead) {

  }

  selectedMateriale($event: Event, l: Dead) {

  }
}
