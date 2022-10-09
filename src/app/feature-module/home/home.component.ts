import { Component, OnInit } from '@angular/core';
import { NewEntryPopupComponent } from '../new-entry/new-entry.popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  public newEntry(): void {
    const dialogRef = this.dialog.open(NewEntryPopupComponent, {
      width: '90%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
