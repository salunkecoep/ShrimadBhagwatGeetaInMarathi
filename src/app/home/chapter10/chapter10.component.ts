import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter10',
  templateUrl: './chapter10.component.html',
  styleUrls: ['./chapter10.component.scss'],
})
export class Chapter10Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
