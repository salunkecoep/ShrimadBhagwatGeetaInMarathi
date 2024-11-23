import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter7',
  templateUrl: './chapter7.component.html',
  styleUrls: ['./chapter7.component.scss'],
})
export class Chapter7Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
