import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';

@Component({
  selector: 'app-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
  styleUrls: ['./chart-doughnut.component.scss']
})
export class ChartDoughnutComponent implements AfterViewInit {

  @ViewChild('doughnutChart') doughnutChart!: ElementRef<HTMLCanvasElement>

  chart! : Chart;
  data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  constructor() { 
    Chart.register(Decimation, Filler, Legend, Title, Tooltip);
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.doughnutChart.nativeElement, {
      type: 'doughnut',
      data: this.data,
      options:{
        maintainAspectRatio: false
      }
    })
  }

}
