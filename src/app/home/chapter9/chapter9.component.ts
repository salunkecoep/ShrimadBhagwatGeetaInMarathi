import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter9',
  templateUrl: './chapter9.component.html',
  styleUrls: ['./chapter9.component.scss'],
})
export class Chapter9Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
