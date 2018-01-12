import { Component, OnInit } from '@angular/core';
import {WindyService} from '../../Services/windy.service';


@Component({
  selector: 'app-replay-view',
  templateUrl: './replay-view.component.html',
  styleUrls: ['./replay-view.component.css']
})
export class ReplayViewComponent implements OnInit {

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {
  }

  sendValue(value) {
    console.log('replaySubjectView =', value);
    this.windyServ.setReplayView(value);
  }

}
