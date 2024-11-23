import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter17',
  templateUrl: './chapter17.component.html',
  styleUrls: ['./chapter17.component.scss'],
})
export class Chapter17Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
