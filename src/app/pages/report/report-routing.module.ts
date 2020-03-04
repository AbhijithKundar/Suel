import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleOverviewComponent } from './overview/overview.component';



const routes: Routes = [
  { path: 'overview', component: ScheduleOverviewComponent },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
