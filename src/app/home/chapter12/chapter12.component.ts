import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter12',
  templateUrl: './chapter12.component.html',
  styleUrls: ['./chapter12.component.scss'],
})
export class Chapter12Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
