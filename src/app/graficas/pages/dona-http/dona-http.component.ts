import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  dChartLabels: Label[] = [
    // 'Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Orders',
    // 'Flekis',
  ];
  dChartData: MultiDataSet = [];
  dChartType: ChartType = 'doughnut';
  colors: Color[] = [
    {
      backgroundColor: ['orange', 'cyan', 'yellow', 'green', 'lightblue'],
    },
  ];

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSociales().subscribe((res) => {
      this.dChartLabels = Object.keys(res);
      this.dChartData.push(Object.values(res));
      // this.dChartData = Object.values(res);
    });
  }
}
