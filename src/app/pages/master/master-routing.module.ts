import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterOverviewComponent } from './overview/overview.component';
import { BusListComponent } from './bus/component/bus-list/bus-list.component';
import { DriverListComponent } from './driver/component/driver-list/driver-list.component';



const routes: Routes = [
  { path: 'overview', component: MasterOverviewComponent },
  { path: 'driver-profile', component: DriverListComponent },
  { path: 'vehicle-profile', component: BusListComponent },
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
export class MasterRoutingModule { }
