import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';

import { HomePageRoutingModule } from './home-routing.module';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSettingsService } from '../app-settings.service';
import { SettingsComponent } from './settings/settings.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Chapter3Component } from './chapter3/chapter3.component';
import { Chapter4Component } from './chapter4/chapter4.component';
import { Chapter5Component } from './chapter5/chapter5.component';
import { Chapter6Component } from './chapter6/chapter6.component';
import { Chapter7Component } from './chapter7/chapter7.component';
import { Chapter8Component } from './chapter8/chapter8.component';
import { Chapter9Component } from './chapter9/chapter9.component';
import { Chapter10Component } from './chapter10/chapter10.component';
import { Chapter11Component } from './chapter11/chapter11.component';
import { Chapter12Component } from './chapter12/chapter12.component';
import { Chapter13Component } from './chapter13/chapter13.component';
import { Chapter14Component } from './chapter14/chapter14.component';
import { Chapter15Component } from './chapter15/chapter15.component';
import { Chapter16Component } from './chapter16/chapter16.component';
import { Chapter17Component } from './chapter17/chapter17.component';
import { Chapter18Component } from './chapter18/chapter18.component';
import { AboutComponent } from './about/about.component';
import { PasaydanComponent } from './pasaydan/pasaydan.component';
import { PoetComponent } from './poet/poet.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfirmationMessageComponent } from './confirmation-message/confirmation-message.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';

@NgModule({
  imports: [
    MatDialogModule,
    MatTabsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    AboutComponent,
    PoetComponent,
    SummaryComponent,
    PasaydanComponent,
    SettingsComponent,
    Chapter1Component,
    Chapter2Component,
    Chapter3Component,
    Chapter4Component,
    Chapter5Component,
    Chapter6Component,
    Chapter7Component,
    Chapter8Component,
    Chapter9Component,
    Chapter10Component,
    Chapter11Component,
    Chapter12Component,
    Chapter13Component,
    Chapter14Component,
    Chapter15Component,
    Chapter16Component,
    Chapter17Component,
    Chapter18Component,
    ConfirmationMessageComponent,
    AudioPlayerComponent
  ],
  providers: [
    AppSettingsService,
    AdMobPro,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
  ]
})
export class HomePageModule { }
