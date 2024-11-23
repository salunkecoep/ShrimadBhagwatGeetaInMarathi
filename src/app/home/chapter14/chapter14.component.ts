import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter14',
  templateUrl: './chapter14.component.html',
  styleUrls: ['./chapter14.component.scss'],
})
export class Chapter14Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
