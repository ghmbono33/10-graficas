import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  dChartLabels: Label[] = [
    'Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Orders',
    'Flekis',
  ];
  dChartData: MultiDataSet = [
    [350, 450, 100, 33, 125],
    // [40, 20, 150],
    // [80, 100, 300],
  ];
  dChartType: ChartType = 'doughnut';
  colors: Color[] = [
    {
      backgroundColor: ['orange', 'cyan', 'yellow', 'green', 'lightblue'],
    },
  ];
}
