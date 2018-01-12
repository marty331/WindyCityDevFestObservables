import { Component, OnInit } from '@angular/core';
import { WindyService } from '../../Services/windy.service';

@Component({
  selector: 'app-behaviors-view',
  templateUrl: './behaviors-view.component.html',
  styleUrls: ['./behaviors-view.component.css']
})
export class BehaviorsViewComponent implements OnInit {

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {
  }

  sendValue(value) {
    console.log('behaviorSubjectValue =', value);
    this.windyServ.setBehaviorView({textVal: value});
  }

}
