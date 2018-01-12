import { Component, OnInit } from '@angular/core';
import { WindyService } from '../../../Services/windy.service';

@Component({
  selector: 'app-subject-sub',
  templateUrl: './subject-sub.component.html',
  styleUrls: ['./subject-sub.component.css']
})
export class SubjectSubComponent implements OnInit {
  serviceVal = '';

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {
    this.windyServ.getCurrentView().subscribe(v => {
      this.serviceVal = v['view'];
      console.log('serviceVal =', this.serviceVal);
    });
  }

}
