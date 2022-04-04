import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsAreaComponent } from './components/charts-area/charts-area.component';
import { ChartsComponent } from './containers/charts/charts.component';
import { ChartsModule } from './charts.module';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartsLineComponent } from './components/charts-line/charts-line.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { DoughnutController } from 'chart.js';
import { ChartDoughnutComponent } from './components/chart-doughnut/chart-doughnut.component';

const routes: Routes = [
  { path: '', component: ChartsComponent, children : [
    { path: '', component: ChartBarComponent },
    { path: 'area', component: ChartsAreaComponent },
    { path: 'line', component: ChartsLineComponent },
    { path: 'pie', component: ChartPieComponent },
    { path: 'doughnut', component: ChartDoughnutComponent }
  ]}
];

@NgModule({
  imports: [ChartsModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
