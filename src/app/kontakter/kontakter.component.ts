import {Component, Inject, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kontakter',
  templateUrl: './kontakter.component.html',
  styleUrls: ['./kontakter.component.scss']
})
export class KontakterComponent implements OnInit {


  @Input()
  public  email: string;
  constructor() { }

  ngOnInit(): void {
  }

}
