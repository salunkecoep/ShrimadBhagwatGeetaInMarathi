import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from '../../app-settings.service';

@Component({
  selector: 'app-chapter18',
  templateUrl: './chapter18.component.html',
  styleUrls: ['./chapter18.component.scss'],
})
export class Chapter18Component implements OnInit {

  constructor(public setting: AppSettingsService) { }

  ngOnInit() {}

}
