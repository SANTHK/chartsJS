import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,LinearScale ,BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';


@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {

  @ViewChild('barChart') areaChart!: ElementRef<HTMLCanvasElement>;
  chart! : Chart;
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  data = {
    labels: this.labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  constructor() {
    Chart.register(LinearScale , BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.chart = new Chart(this.areaChart.nativeElement, {
      type: 'bar',
      data: this.data,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
    });
  }

}
