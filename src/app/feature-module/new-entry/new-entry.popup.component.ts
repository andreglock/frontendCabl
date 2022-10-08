import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-entry.popup',
  templateUrl: './new-entry.popup.component.html',
  styleUrls: ['./new-entry.popup.component.scss'],
})
export class NewEntryPopupComponent implements OnInit {
  public optionAges = [
    'Ja',
    'Nein',
    'Patient*in kann oder will keine Angabe machen',
    'nicht gefragt/dokumentiert',
  ];

  public optionSex = [
    'mänlich',
    'weiblich',
    'inter/ divers',
    'Patient*in kann oder will keine Angabe machen',
    'nicht gefragt/dokumentiert',
  ];

  constructor(
    public dialogRef: MatDialogRef<NewEntryPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close();
  }
}
