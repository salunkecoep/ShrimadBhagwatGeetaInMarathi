import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    public setting: AppSettingsService,
    public dialogRef: MatDialogRef<AboutComponent>
  ) { }

  ngOnInit(): void { }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
