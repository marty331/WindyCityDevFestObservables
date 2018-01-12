import { Component, OnInit } from '@angular/core';
import {WindyService} from '../../Services/windy.service';

@Component({
  selector: 'app-behavior-show',
  templateUrl: './behavior-show.component.html',
  styleUrls: ['./behavior-show.component.css']
})
export class BehaviorShowComponent implements OnInit {

  switchWatch: any;

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {
    this.windyServ.getSwitch().subscribe(s => {
      console.log('s =', s);
      this.switchWatch = s;
    })
  }

  selectSwitch(value) {
    console.log('selectSwitch =', value);
    this.windyServ.setSwitch({switch: value});
  }



}
