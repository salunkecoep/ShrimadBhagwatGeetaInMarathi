import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private sbColor: string = "#E65D15";
  private repeatAudioOpt: number = 0;
  private shuffleAudio = false;
  private phColor: string = "#E66C2C";
  private ptColor: string = "#FFFFFF";
  public nightMode = false;
  public selectedTabIndex = 0;
  public textFontSize = 17;
  public tabBgColor = "white";
  public chapterTextColor = "black";

  constructor(public dialog: MatDialog) {
    this.readSettings();
  }

  public setNightMode(mode: boolean) {
    this.nightMode = mode;
    if (this.nightMode) {
      this.tabBgColor = "#424242";
      this.chapterTextColor = "#F5F5F5";
    }
    else {
      this.tabBgColor = "white";
      this.chapterTextColor = "black";
    }
    localStorage.setItem("nightMode", String(this.nightMode));
    localStorage.setItem("tabBgColor", String(this.tabBgColor));
    localStorage.setItem("chapterTextColor", String(this.chapterTextColor));
  }

  public setSelectedTabIndex(tagIndex: number) {
    this.selectedTabIndex = tagIndex;
    localStorage.setItem("selectedTabIndex", String(this.selectedTabIndex));
  }

  public setTextFontSize(tagIndex: number) {
    this.textFontSize = tagIndex;
    localStorage.setItem("textFontSize", String(this.textFontSize));
  }

  private readSettings() {
    let savedNightMode = localStorage.getItem("nightMode");
    if (savedNightMode != null && savedNightMode == 'true') {
      this.nightMode = true;
    }

    let savedTabBgColor = localStorage.getItem("tabBgColor");
    if (savedTabBgColor != null) {
      this.tabBgColor = String(savedTabBgColor);
    }

    let savedChapterTextColor = localStorage.getItem("chapterTextColor");
    if (savedChapterTextColor != null) {
      this.chapterTextColor = String(savedChapterTextColor);
    }

    let savedTabIndex = localStorage.getItem("selectedTabIndex");
    if (savedTabIndex != null) {
      this.selectedTabIndex = Number(savedTabIndex);
    }

    let savedFontSize = localStorage.getItem("textFontSize");
    if (savedFontSize != null) {
      this.textFontSize = Number(savedFontSize);
    }

    let color = localStorage.getItem("pageHeaderColor");
    if (color != null) {
      this.phColor = color;
    }

    color = localStorage.getItem("pageTextColor");
    if (color != null) {
      this.ptColor = color;
    }

    color = localStorage.getItem("statusBarColor");
    if (color != null) {
      this.sbColor = color;
    }

    // These are session based settings.
    // let repeatAudioVal = localStorage.getItem("repeatAudioOption");
    // if (repeatAudioVal != null) {
    //   this.repeatAudioOpt = Number(repeatAudioVal);
    // }

    // let shuffleAudioVal = localStorage.getItem("shuffleAudioOption");
    // if (shuffleAudioVal != null) {
    //   this.shuffleAudio = Boolean(shuffleAudioVal);
    // }
  }

  public getDialogPageStyle() {
    let style = {
      'font-size': this.textFontSize + 'px',
      'color': this.chapterTextColor,
      'background-color': this.tabBgColor
    };
    return style;
  }

  public getHeaderStyle() {
    let style = {
      'background-color': this.pageHeaderColor,
      'color': this.pageTextColor,
    };
    return style;
  }

  get pageHeaderColor(): string {
    return this.phColor;
  }
  set pageHeaderColor(val: string) {
    this.phColor = val;
    localStorage.setItem("pageHeaderColor", val);
  }

  get pageTextColor(): string {
    return this.ptColor;
  }
  set pageTextColor(val: string) {
    this.ptColor = val;
    localStorage.setItem("pageTextColor", val);
  }

  get statusBarColor(): string {
    return this.sbColor;
  }
  set statusBarColor(val: string) {
    this.sbColor = val;
    localStorage.setItem("statusBarColor", val);
  }

  get repeatAudioOption(): number {
    return this.repeatAudioOpt;
  }
  set repeatAudioOption(val: number) {
    this.repeatAudioOpt = val;
    localStorage.setItem("repeatAudioOption", val.toString());
  }

  get shuffleAudioOption(): boolean {
    return this.shuffleAudio;
  }
  set shuffleAudioOption(val: boolean) {
    this.shuffleAudio = val;
    localStorage.setItem("shuffleAudioOption", val.toString());
  }

  public setDefaultSettings() {
    this.setNightMode(false);
    this.setTextFontSize(17);
    this.pageHeaderColor = "#E66C2C";
    this.pageTextColor = "#FFFFFF";
    this.statusBarColor = "#E65D15";
  }

  public getFooterStyle() {
    let style = {
      'background-color': this.pageHeaderColor,
      'color': "black",
    };
    return style;
  }
}
