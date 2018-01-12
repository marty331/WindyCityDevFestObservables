import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindyService } from './Services/windy.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { ObservablesViewComponent } from './Components/observables-view/observables-view.component';
import { SubjectsViewComponent } from './Components/subjects-view/subjects-view.component';
import { BehaviorsViewComponent } from './Components/behaviors-view/behaviors-view.component';
import { SubjectSubComponent } from './Components/subjects-view/subject-sub/subject-sub.component';
import { BehaviorSubComponent } from './Components/behaviors-view/behavior-sub/behavior-sub.component';
import { HomeComponent } from './Components/home/home.component';
import { CommonModule } from '@angular/common';
import { ReplayViewComponent } from './Components/replay-view/replay-view.component';
import { ReplaySubComponent } from './Components/replay-view/replay-sub/replay-sub.component';
import { BehaviorShowComponent } from './Components/behavior-show/behavior-show.component';

const windyRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'observables',
    component: ObservablesViewComponent
  },
  {
    path: 'subjects',
    component: SubjectsViewComponent
  },
  {
    path: 'behaviors',
    component: BehaviorsViewComponent
  },
  {
    path: 'replays',
    component: ReplayViewComponent
  },
  {
    path: 'behaveShow',
    component: BehaviorShowComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObservablesViewComponent,
    SubjectsViewComponent,
    BehaviorsViewComponent,
    SubjectSubComponent,
    BehaviorSubComponent,
    HomeComponent,
    ReplayViewComponent,
    ReplaySubComponent,
    BehaviorShowComponent
  ],
  imports: [
    RouterModule.forRoot(windyRoutes),
    BrowserModule,
    HttpModule,
    CommonModule
  ],
  providers: [WindyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
