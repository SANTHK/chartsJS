import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,LinearScale ,BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';


@Component({
  selector: 'app-charts-area',
  templateUrl: './charts-area.component.html',
  styleUrls: ['./charts-area.component.scss']
})
export class ChartsAreaComponent implements OnInit {

  @ViewChild('areaChart') areaChart!: ElementRef<HTMLCanvasElement>;
  chart! : Chart;
  

  constructor() {
    Chart.register(LinearScale , BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
   }

  ngOnInit(): void {
  }

  

}
