import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.scss'],
})
export class ConfirmationMessageComponent implements OnInit {

  public title = "";
  public message = "";
  public leftBtnTitle = "";
  public rightBtnTitle = "";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ConfirmationMessageComponent>
  ) { 
    this.title = data.title;
    this.message = data.message;
    this.leftBtnTitle = data.leftBtnTitle;
    this.rightBtnTitle = data.rightBtnTitle;
  }

  ngOnInit() {}

  public leftBtnClick(): void {
    this.dialogRef.close(this.leftBtnTitle);
  }

  public rightBtnClick(): void {
    this.dialogRef.close(this.rightBtnTitle);
  }}
