import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MappingOverviewComponent } from './overview/overview.component';
import { ManualListComponent } from './manual/component/manual-list/manual-list.component';



const routes: Routes = [
  { path: 'overview', component: MappingOverviewComponent },
  { path: 'manual', component: ManualListComponent },
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
export class TransactionRoutingModule { }
