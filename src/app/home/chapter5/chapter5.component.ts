import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter5',
  templateUrl: './chapter5.component.html',
  styleUrls: ['./chapter5.component.scss'],
})
export class Chapter5Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
