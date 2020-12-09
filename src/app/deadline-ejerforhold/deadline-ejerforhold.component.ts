import {Component, Input, OnInit} from '@angular/core';
import {DeadlineService} from "../../services/deadline.service";
import {Deadline} from "../../models/deadline";
import {EjerforholdDeadline} from "../../models/ejerforhold-deadline";

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

  mdr:{} = {  }
  constructor(private ds: DeadlineService) { }

  ngOnInit(): void {
    this.ds.GetDeadlineEjerforhold(this.ejerforhold).subscribe(ej => {
     this.deadline = ej;
    });
  }

  update(l: any) {

  }
}
