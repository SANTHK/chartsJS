import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsComponent } from './containers/charts/charts.component';
import { ChartsAreaComponent } from './components/charts-area/charts-area.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { RouterModule } from '@angular/router';
import { ChartsLineComponent } from './components/charts-line/charts-line.component';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';

@NgModule({
  declarations: [
    ChartsComponent,
    ChartsAreaComponent,
    ChartPieComponent,
    ChartBarComponent,
    ChartsLineComponent,
    ChartDoughnutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ChartsModule { 
}
