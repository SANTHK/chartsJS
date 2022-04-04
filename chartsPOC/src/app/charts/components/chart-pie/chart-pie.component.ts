import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, Decimation, Filler, Legend, Title, Tooltip, PieController, ArcElement} from 'chart.js';


@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.scss']
})
export class ChartPieComponent implements OnInit {

  @ViewChild('pieChart') pieChart!: ElementRef<HTMLCanvasElement>;

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
    Chart.register(PieController, ArcElement, Decimation, Filler, Legend, Title, Tooltip);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.chart = new Chart( this.pieChart.nativeElement, {
      type: 'pie',
      data: this.data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    })
  }

}
