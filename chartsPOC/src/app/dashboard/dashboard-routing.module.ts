import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  {path: 'charts', loadChildren: () => 
  import('../charts/charts-routing.module').then(m => m.ChartsRoutingModule)}
];

@NgModule({
  imports: [DashboardModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
