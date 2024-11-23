import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter16',
  templateUrl: './chapter16.component.html',
  styleUrls: ['./chapter16.component.scss'],
})
export class Chapter16Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
