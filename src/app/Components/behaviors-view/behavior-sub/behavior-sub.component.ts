import { Component, OnInit } from '@angular/core';
import { WindyService } from '../../../Services/windy.service';

@Component({
  selector: 'app-behavior-sub',
  templateUrl: './behavior-sub.component.html',
  styleUrls: ['./behavior-sub.component.css']
})
export class BehaviorSubComponent implements OnInit {

  behaviorValue = '';

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {
    this.windyServ.getBehaviorView().subscribe(v => {
      console.log('behave =', v);
      this.behaviorValue = v['textVal'];
    })
  }

}
