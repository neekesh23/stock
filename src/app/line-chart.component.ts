import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as HighCharts from 'highcharts';
import Highcharts = require('highcharts');

@Component({
  selector: 'line-chart',
  styles: [],
  template: `
  <div [chart]="chart"></div>`,
})
export class LineChartComponent implements OnInit {
  chart: any;
  constructor() {}

  ngOnInit() {
    fetch(
      `https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json`
    )
      .then((res) => res.json())
      .then((data) => {
        this.chart = new Chart({
          chart: {
            zoomType: 'x',
          },
          title: {
            text: 'USD -> EUR',
          },
          subtitle: {},
          xAxis: {
            type: 'datetime',
          },
          yAxis: {
            title: {
              text: 'Exchange rate',
            },
          },
          legend: {
            enabled: false,
          },
          plotOptions: {
            area: {
              fillColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1,
                },
                stops: [
                  [0, Highcharts.getOptions().colors[0]],
                  [1, Highcharts.getOptions().colors[0]],
                ],
              },
              marker: {
                radius: 2,
              },
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 1,
                },
              },
              threshold: null,
            },
          },

          series: [
            {
              type: 'area',
              name: 'USD > EUR',
              color: '#000000',
              data: data,
            },
          ],
        });
      });
  }
}
