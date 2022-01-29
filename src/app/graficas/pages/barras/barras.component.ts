import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [],
})
export class BarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [60, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 49, 70, 71, 36, 65, 20], label: 'Series B' },
    { data: [28, 49, 70, 71, 36, 65, 20], label: 'Series C' },
  ];
  constructor() {}

  ngOnInit(): void {}

  public randomize(): void {
    for (let index = 0; index < this.barChartData.length; index++) {
      this.barChartData[index].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
      ];
    }
  }
}
