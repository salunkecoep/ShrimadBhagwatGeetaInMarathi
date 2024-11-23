import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter13',
  templateUrl: './chapter13.component.html',
  styleUrls: ['./chapter13.component.scss'],
})
export class Chapter13Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
