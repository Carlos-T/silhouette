import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sil-settings',
  template: require('./settings.component.html'),
  styles: [require('./settings.component.scss')]
})
export class SettingsComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Settings');
  }

}
