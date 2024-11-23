import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-poet',
  templateUrl: './poet.component.html',
  styleUrls: ['./poet.component.css']
})
export class PoetComponent implements OnInit {

  constructor(
    public setting: AppSettingsService,
    public dialogRef: MatDialogRef<PoetComponent>
  ) { }

  ngOnInit(): void { }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
