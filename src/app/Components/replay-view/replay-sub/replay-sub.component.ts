import { Component, OnInit} from '@angular/core';
import {WindyService} from '../../../Services/windy.service';

@Component({
  selector: 'app-replay-sub',
  templateUrl: './replay-sub.component.html',
  styleUrls: ['./replay-sub.component.css']
})
export class ReplaySubComponent implements OnInit {

  replayValue = [];

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {

  }

  yesSubscribe() {
    this.windyServ.getReplayView().subscribe(v => {
      this.replayValue.push(v.replayVal);
    }, err => {
      console.log('replay err =', err);
    }, () => {
      console.log('replay complete');
    })
  }
}
