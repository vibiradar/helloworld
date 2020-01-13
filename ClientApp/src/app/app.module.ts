import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, effects, initialState } from './store/app.state';

import { MaterialModule } from './app.material.module';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { ForecastDetailComponent } from './components/forecast/presentation/forecast-list/forecast-list.component';
import { ForecastContainerComponent } from './components/forecast/containers/forecast.container.component';
import { ForecastDetailViewComponent } from './components/forecast/presentation/forecast-detail-view/forecast-detail-view.component';
import { ForecastDialogComponent } from './components/forecast/presentation/forecast-dialog/forecast-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './components/forecast/presentation/add/add.component';
import { ForecastComponent } from './components/forecast/presentation/forecast/forecast.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { GenericKendoGridComponent } from './components/shared/kendo/generic-kendo-grid/generic-kendo-grid.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    ForecastContainerComponent,
    ForecastDetailComponent,
    ForecastDetailViewComponent,
    ForecastDialogComponent,
    AddComponent,
    ForecastComponent,
    ProgressSpinnerComponent,
    FullscreenComponent,
    GenericKendoGridComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { initialState }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({     // Required for ReduxDevTools
      maxAge: 25                         // Track history for 25 actions
    }),

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fullscreen', component: FullscreenComponent },
      { path: 'fetch-data', component: ForecastContainerComponent },
    ]),

    ButtonsModule,

    GridModule
  ],
  entryComponents: [ForecastDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
