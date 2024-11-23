import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter1',
  templateUrl: './chapter1.component.html',
  styleUrls: ['./chapter1.component.scss'],
})
export class Chapter1Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}
}
