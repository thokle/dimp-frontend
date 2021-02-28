import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {KontaktTitlers, KontaktTyper, UdsendingKontakter} from "../../models/udsending-kontakter";
import {KontaktService} from "../../services/kontakt.service";

@Component({
  selector: 'app-opret-kontakt-dialog',
  templateUrl: './opret-kontakt-dialog.component.html',
  styleUrls: ['./opret-kontakt-dialog.component.scss']
})
export class OpretKontaktDialogComponent implements OnInit {

  titel: KontaktTitlers[] = [];
  typer : KontaktTyper[] = [];

    fg: FormGroup ;
    kontakt: UdsendingKontakter;
    selectedTitel;
    selectedType;

  constructor(
    public dialogRef: MatDialogRef<OpretKontaktDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private  fb: FormBuilder, private  ks: KontaktService) {
      this.fg = this.fb.group({
        name:[],
        email: [],
        telefonnummer: [],
        titel: [],
        kontaktType: []
      });


  }

  ngOnInit(): void {
    console.log('data blad id ' +this.data);
      this.ks.GetKontaktTitler().subscribe(value => {
        this.titel = value;

      });

      this.ks.GetKontaktTyper().subscribe(value => {
        this.typer = value;
      });
  }

  public  opret(): void {
    this.kontakt = {Name: this.fg.controls.name.value, BladId: this.data, Email: this.fg.controls.email.value
      ,Telefonnummer: this.fg.controls.telefonnummer.value ,Titel: this.selectedTitel, KontaktType: this.selectedType}
    this.dialogRef.close(this.kontakt);
  }

}
