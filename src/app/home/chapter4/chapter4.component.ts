import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.scss'],
})
export class Chapter4Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
