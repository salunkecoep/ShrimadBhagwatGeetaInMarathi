import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter6',
  templateUrl: './chapter6.component.html',
  styleUrls: ['./chapter6.component.scss'],
})
export class Chapter6Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
