import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter15',
  templateUrl: './chapter15.component.html',
  styleUrls: ['./chapter15.component.scss'],
})
export class Chapter15Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
