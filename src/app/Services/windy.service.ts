import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { map, takeUntil} from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class WindyService {

  headers: Headers;
  options: RequestOptions;

  private view = new Subject<any>();
  private behave = new BehaviorSubject<any>({textVal: 'Hello'});
  private replay = new ReplaySubject<any>(3);
  private switcher = new BehaviorSubject<any>({switch: ''});

  private static handleError (error: any) {
    let errMsg: string;
    errMsg = 'api error: ' + error.status + ' - ' + error.statusText + ': ' + JSON.stringify(error);
    console.log('errMsg =' + errMsg);
    if (error.status === 500) {
      return Observable.of();
    }
    if (error.status >= 200 && error.status < 300) {
      const res = new HttpResponse({
        body: null,
        headers: error.headers,
        status: error.status,
        statusText: error.statusText,
        url: error.url
      });

      return Observable.of(res);
    }
    return Observable.throw(error);
  }

  constructor(
    private http: Http
  ) {
    this.headers = new Headers({ 'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9' });
    this.options = new RequestOptions({ headers: this.headers });

  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  setCurrentView(currentView: string) {
    this.view.next({view: currentView});
  }

  getCurrentView(): Observable<any> {
    return this.view.asObservable();
  }

  setBehaviorView(behave: Object) {
    this.behave.next(behave);
  }

  getBehaviorView(): Observable<any> {
    return this.behave.asObservable();
  }

  setReplayView(currentView: number) {
    for (let x = 0; x < 4; x++) {
      this.replay.next({replayVal: currentView});
      currentView++;
    }
  }

  getReplayView(): Observable<any> {
    return this.replay.asObservable();
  }

  setSwitch(switched: object) {
    this.switcher.next(switched);
  }

  getSwitch(): Observable<any> {
    return this.switcher.asObservable();
  }

}
