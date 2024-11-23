import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  constructor(
    public setting: AppSettingsService,
    public dialogRef: MatDialogRef<SummaryComponent>
  ) { }

  ngOnInit(): void { }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
