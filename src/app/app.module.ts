import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartModule],
  declarations: [AppComponent, LineChartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
