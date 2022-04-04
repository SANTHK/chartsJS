import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,LinearScale ,BarElement, BarController, CategoryScale, 
  Decimation, Filler, Legend, Title, Tooltip, LineElement, LineController, PointElement} from 'chart.js';


@Component({
  selector: 'app-charts-line',
  templateUrl: './charts-line.component.html',
  styleUrls: ['./charts-line.component.scss']
})
export class ChartsLineComponent implements OnInit {

  @ViewChild('lineChart') lineChart!: ElementRef<HTMLCanvasElement>;
  chart! : Chart;
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  data = {
    labels: this.labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  constructor() {
    Chart.register(LinearScale , BarElement, BarController, CategoryScale, LineElement, LineController, PointElement, Decimation, Filler, Legend, Title, Tooltip);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.chart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: this.data,
    });
  }

}
