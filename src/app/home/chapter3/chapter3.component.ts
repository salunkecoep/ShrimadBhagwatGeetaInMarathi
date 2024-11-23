import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.component.html',
  styleUrls: ['./chapter3.component.scss'],
})
export class Chapter3Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
