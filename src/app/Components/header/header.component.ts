import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'WindyCity Observables';
  isActive = false;

  isObservable = false;
  isSubject = false;
  isBehavior = false;
  isReplay = false;
  isSwitch = false;

  constructor() { }

  ngOnInit() {
  }

  observablesClicked(value) {
    console.log('value = ', value);
    switch (value) {
      case 'brands':
        this.isObservable = false;
        this.isSubject = false;
        this.isBehavior = false;
        this.isReplay = false;
        this.isSwitch = false;
        break;
      case 'observables':
        this.isObservable = true;
        this.isSubject = false;
        this.isBehavior = false;
        this.isReplay = false;
        this.isSwitch = false;
        break;
      case 'subjects':
        this.isObservable = false;
        this.isSubject = true;
        this.isBehavior = false;
        this.isReplay = false;
        this.isSwitch = false;
        break;
      case 'behaviors':
        this.isObservable = false;
        this.isSubject = false;
        this.isBehavior = true;
        this.isReplay = false;
        this.isSwitch = false;
        break;
      case 'behaveShow':
        this.isObservable = false;
        this.isSubject = false;
        this.isBehavior = false;
        this.isReplay = false;
        this.isSwitch = true;
        break;
      case 'replays':
        this.isReplay = true;
        this.isObservable = false;
        this.isSubject = false;
        this.isBehavior = false;
        this.isSwitch = false;
        break;
    }
  }
}
