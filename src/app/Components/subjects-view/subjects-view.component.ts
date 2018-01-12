import { Component, OnInit } from '@angular/core';
import { WindyService } from '../../Services/windy.service';

@Component({
  selector: 'app-subjects-view',
  templateUrl: './subjects-view.component.html',
  styleUrls: ['./subjects-view.component.css']
})
export class SubjectsViewComponent implements OnInit {

  constructor(
    private windyServ: WindyService,
  ) { }

  ngOnInit() {
  }

  sendValue(value) {
    console.log('subjectValue =', value);
    this.windyServ.setCurrentView(value);
  }



}
