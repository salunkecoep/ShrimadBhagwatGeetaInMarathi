import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter11',
  templateUrl: './chapter11.component.html',
  styleUrls: ['./chapter11.component.scss'],
})
export class Chapter11Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
