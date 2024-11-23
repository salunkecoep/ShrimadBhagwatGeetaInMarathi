import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter8',
  templateUrl: './chapter8.component.html',
  styleUrls: ['./chapter8.component.scss'],
})
export class Chapter8Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
