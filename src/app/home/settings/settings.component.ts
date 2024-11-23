import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppSettingsService } from '../../app-settings.service';
import { ThemePalette } from '@angular/material/core';
import { ConfirmationMessageComponent } from '../confirmation-message/confirmation-message.component';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  textFontSize = [];
  selectedFontSize = 17;

  @ViewChild("toggleElement") ref: any;

  constructor(
    private statusBar: StatusBar,
    public dialogRef: MatDialogRef<SettingsComponent>,
    private confirmDialogRef: MatDialogRef<ConfirmationMessageComponent>,
    public setting: AppSettingsService
  ) {

    // Read settings.
    this.checked = this.setting.nightMode;
    this.selectedFontSize = this.setting.textFontSize;

    // Set text font size.
    for (let fontSize = 10; fontSize <= 35; fontSize++) {
      this.textFontSize.push(fontSize);
    }
  }

  ngOnInit() { }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  get pageHeaderColor(): string {
    return this.setting.pageHeaderColor;
  }
  set pageHeaderColor(val: string) {
    this.setting.pageHeaderColor = val;
    this.setting.statusBarColor = val;
    this.statusBar.backgroundColorByHexString(this.setting.statusBarColor);
  }

  get pageTextColor(): string {
    return this.setting.pageTextColor;
  }
  set pageTextColor(val: string) {
    this.setting.pageTextColor = val;
  }

  public nightModeChanged(event: any): void {
    this.setting.setNightMode(event.checked);
  }

  public textFontSizeChanged(event: any): void {
    this.setting.setTextFontSize(event.value);
  }

  public openResetConfirmationDialog() {
    this.confirmDialogRef = this.setting.dialog.open(ConfirmationMessageComponent, {
      panelClass: 'custom-dialog-container',
      width: '350px',
      height: '150px',
      autoFocus: false,
      data: {
        title: "Reset Confirmation",
        message: "All settings will be reset.",
        leftBtnTitle: "Cancel",
        rightBtnTitle: "Reset"
      }
    });

    this.confirmDialogRef.afterClosed().subscribe(result => {
      if ("Reset" === result) {
        this.reset();
      }
    });
  }

  public reset() {
    this.setting.setDefaultSettings();
    this.checked = this.setting.nightMode;
    this.selectedFontSize = this.setting.textFontSize;
    this.ref.checked = this.checked;
    this.statusBar.backgroundColorByHexString(this.setting.statusBarColor);
  }
}
