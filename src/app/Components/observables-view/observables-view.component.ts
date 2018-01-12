import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-observables-view',
  templateUrl: './observables-view.component.html',
  styleUrls: ['./observables-view.component.css']
})
export class ObservablesViewComponent implements OnInit {

  martysGit: any;

  constructor(
    private http: Http,
  ) {
  }

  ngOnInit() {

    this.martysGit = Observable.interval(3000)
      .switchMap(() => this.http.get('https://api.github.com/users/marty331/events'))
      .map((data) => data.json());

    console.log('martysGit =', this.martysGit);
  }

}
