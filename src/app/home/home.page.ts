import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { HostListener } from "@angular/core";
import { AboutComponent } from './about/about.component';
import { PoetComponent } from './poet/poet.component';
import { PasaydanComponent } from './pasaydan/pasaydan.component';
import { SettingsComponent } from './settings/settings.component';
import { SummaryComponent } from './summary/summary.component';
import { AppSettingsService } from '../app-settings.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('tabGroup') tabGroup;
  public audioPlayer = new Audio();
  public title = 'श्रीमद भगवद गीता';
  public scrHeight = 100;
  public scrWidth = 100;
  public endTabIndex = 17;
  public selectedTabIndex = 1;
  public startTouchPoint = null;
  public endTouchPoint = null;
  public tabTouched = false;
  public backButtonSubscription;
  public dialogRef: MatDialogRef<any> = null;
  public audioStarted = false;
  public showRepeatAudioButton = true;
  public minDuration = 1;
  public maxDuration = 100;
  public currentTime = 0;
  public elapsedTime = "0.0";
  public totalTime = "0.0";

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight - 83;
    this.scrWidth = window.innerWidth;
  }

  constructor(
    private statusBar: StatusBar,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private router: Router,
    private elementRef: ElementRef,
    public setting: AppSettingsService,
    private admob: AdMobPro
  ) {
    this.getScreenSize();
    this.selectedTabIndex = setting.selectedTabIndex;

    if (this.setting.repeatAudioOption === 1) {
      this.showRepeatAudioButton = false;
    }

    this.loadAudioFile();

    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString(this.setting.statusBarColor);
      this.splashScreen.hide();
      this.showBanner();

      this.backButtonSubscription = this.platform.backButton.subscribe(() => {
        let diaLen = this.setting.dialog.openDialogs.length;
        if (diaLen) {
          let topDialog = this.setting.dialog.openDialogs[diaLen - 1];
          topDialog.close();
        } else if (this.router.url === '/home') {
          navigator['app'].exitApp();
        }
      });
    });
  }

  ngOnInit(): void {
    var that = this;
    this.audioPlayer.addEventListener('ended', function () { return that.processNextAudio(); });
    this.audioPlayer.addEventListener('timeupdate', () => { return that.moveSlider() });
    this.audioPlayer.addEventListener('loadeddata', () => { return that.moveSlider(); });
  }
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.setting.pageHeaderColor;
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
    this.audioPlayer.pause();
    this.audioPlayer.src = "";
    this.audioPlayer = null;
  }

  public showBanner() {
    let adId = 'ca-app-pub-4127318722091118/8914864234';
    this.admob.createBanner({
      adId: adId,
      position : this.admob.AD_POSITION.BOTTOM_CENTER,
      isTesting : false, //False for live ; True for production
      autoShow : true
    }).then(() => {
      this.admob.showBanner(this.admob.AD_POSITION.BOTTOM_CENTER);
      //alert("Adds shown successfully!!!");
    }).catch((err) => {
      //alert("Failed to show adds!!! : " + err);
    });
  }

  public onTabChanged(event: any) {
    let tabIndex = event.index;
    this.setting.setSelectedTabIndex(tabIndex);

    this.loadAudioFile();
  }

  public loadAudioFile() {
    this.currentTime = 0;
    this.elapsedTime = "0.0";
    this.totalTime = "0.0";

    let audioFileName = "assets/audio/Chapter";
    audioFileName += this.setting.selectedTabIndex + 1;
    audioFileName += ".mp3";
    this.audioPlayer.src = audioFileName;
    this.audioPlayer.load();

    if (this.audioStarted) {
      this.playAudio();
    }
  }

  public moveSlider() {
    let time = Math.ceil(this.audioPlayer.currentTime);
    let duration = Math.ceil(this.audioPlayer.duration);
    if (duration) {
      this.currentTime = Math.ceil((time / duration) * 100.0);

      this.elapsedTime = Math.floor(time / 60.00).toString();
      this.elapsedTime += ":";
      this.elapsedTime += (time % 60.00).toFixed(0);

      this.totalTime = Math.floor(duration / 60.00).toString();
      this.totalTime += ":";
      this.totalTime += (duration % 60.00).toFixed(0);
    }
  }

  public moveAudio() {
    this.audioPlayer.currentTime = (this.audioPlayer.duration * this.currentTime) / this.maxDuration;
  }

  public playPrevAudio() {
    this.selectedTabIndex = this.selectedTabIndex > 0 ? this.selectedTabIndex - 1 : 0;
  }

  public playAudio() {
    this.audioStarted = true;
    this.audioPlayer.play().then((res) => {
    }).catch((e) => {
    });
  }

  public pauseAudio() {
    this.audioStarted = false;
    this.audioPlayer.pause();
  }

  public playNextAudio() {
    this.selectedTabIndex = this.selectedTabIndex < this.endTabIndex ? this.selectedTabIndex + 1 : this.endTabIndex;
  }

  public processNextAudio() {
    if (this.setting.repeatAudioOption === 0) {
      if (this.setting.shuffleAudioOption === true) {
        this.selectedTabIndex = Math.floor(Math.random() * 17);
      } else {
        this.playNextAudio();
      }
    } else if (this.setting.repeatAudioOption === 1) {
      this.audioPlayer.currentTime = 0.0;
      this.playAudio();
    } else {
      this.audioPlayer.currentTime = 0.0;
      this.pauseAudio();
    }
  }

  public setRepeatAudioOption() {
    if (this.setting.repeatAudioOption >= 2) {
      this.setting.repeatAudioOption = 0;
    }
    else {
      this.setting.repeatAudioOption++;
    }

    this.showRepeatAudioButton = true;
    if (this.setting.repeatAudioOption === 1) {
      this.showRepeatAudioButton = false;
    }
  }

  public shuffleAudio() {
    this.setting.shuffleAudioOption = !this.setting.shuffleAudioOption;
  }

  public openSettingsDialog() {
    this.openDialog(SettingsComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.setting.pageHeaderColor;
    });
  }

  public openAboutUsDialog() {
    this.openDialog(AboutComponent);
  }

  public openRateUsDialog() {
    window.location.href = "https://play.google.com/store/apps/details?id=com.precious.shrimad.bhagwat.geeta.in.marathi"
  }

  public openPoetDialog() {
    this.openDialog(PoetComponent);
  }

  public openPasaydanDialog() {
    this.openDialog(PasaydanComponent);
  }

  public openSummaryDialog() {
    this.openDialog(SummaryComponent);
  }

  public shareApp() {
    let url = "https://play.google.com/store/apps/details?id=com.precious.shrimad.bhagwat.geeta.in.marathi"

    // this.socialSharing.shareViaWhatsApp(this.title, null, url).then((res) => {
    //   // Success
    // }).catch((e) => {
    //   // Error!
    // });

    // this.socialSharing.shareViaFacebook(this.title, null, url).then((res) => {
    //   // Success
    // }).catch((e) => {
    //   // Error!
    // });

    // this.socialSharing.shareViaTwitter(this.title, null, url).then((res) => {
    //   // Success
    // }).catch((e) => {
    //   // Error!
    // });
  }

  public openDialog(dialogName: any) {
    this.dialogRef = this.setting.dialog.open(dialogName, {
      panelClass: 'custom-dialog-container',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%'
    });
  }

  getTabStyle() {
    let tabStyle = {
      'font-size': this.setting.textFontSize + 'px',
      'color': this.setting.chapterTextColor,
      'background-color': this.setting.tabBgColor,
      'height': this.scrHeight + 'px'
    };
    return tabStyle;
  }

  public getPrvButonStyle() {
    let style = {
      'opacity': this.setting.selectedTabIndex === 0 ? 0.3 : 1.0
    };
    return style;
  }

  public getNextButonStyle() {
    let style = {
      'opacity': this.setting.selectedTabIndex === 17 ? 0.3 : 1.0
    };
    return style;
  }

  public getRepeatAudioButonStyle() {
    let style = {
      'opacity': this.setting.repeatAudioOption <= 1 ? 1.0 : 0.3
    };
    return style;
  }

  public getShuffleAudioButonStyle() {
    let style = {
      'opacity': this.setting.shuffleAudioOption === true ? 1.0 : 0.3
    };
    return style;
  }

  public tabGroupTouchStart(event: TouchEvent) {
    this.startTouchPoint = event;
    this.endTouchPoint = event;
  }

  public tabGroupTouchMove(event: TouchEvent) {
    if (!this.tabTouched) {
      let mousePos = event.touches[0].clientX;
      let dragDistLimit = 50;
      let dragDist = Math.abs(this.startTouchPoint.touches[0].clientX - mousePos);

      if (dragDist >= dragDistLimit) {
        let tabJump = Math.floor(dragDist / dragDistLimit);
        if (mousePos > this.startTouchPoint.touches[0].clientX) {
          let nextTabIndex = Math.floor(this.selectedTabIndex - tabJump);
          this.selectedTabIndex = nextTabIndex >= 0 ? nextTabIndex : 0;
        }
        else if (mousePos < this.startTouchPoint.touches[0].clientX) {
          let nextTabIndex = Math.ceil(this.selectedTabIndex + tabJump);
          this.selectedTabIndex = nextTabIndex <= this.endTabIndex ? nextTabIndex : this.endTabIndex;
        }
        this.startTouchPoint = event;
      }
    }
  }

  public tabGroupTouchEnd(event: TouchEvent) {
    this.startTouchPoint = null;
    this.endTouchPoint = null;
    this.tabTouched = false;
  }

  public tabTouchStart(event: TouchEvent) {
    this.tabTouched = true;
    this.startTouchPoint = event;
    this.endTouchPoint = event;
  }

  public tabTouchMove(event: TouchEvent) {
    this.endTouchPoint = event;
  }

  public tabTouchEnd(event: TouchEvent) {
    let height = Math.abs(this.startTouchPoint.touches[0].clientY - this.endTouchPoint.touches[0].clientY);
    let width = this.startTouchPoint.touches[0].clientX - this.endTouchPoint.touches[0].clientX;

    let heightLimit = 100;
    let dragDistLimit = 150;
    if (height <= heightLimit && Math.abs(width) >= dragDistLimit) {
      if (width <= 0) {
        this.selectedTabIndex = this.selectedTabIndex > 0 ? this.selectedTabIndex - 1 : 0;
      }
      else {
        this.selectedTabIndex = this.selectedTabIndex < this.endTabIndex ? this.selectedTabIndex + 1 : this.endTabIndex;
      }
    }

    this.startTouchPoint = null;
    this.endTouchPoint = null;
    this.tabTouched = false;
  }
}
