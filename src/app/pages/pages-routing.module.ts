import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'master',
    loadChildren: () => import('./master/master.module').then(mod => mod.MasterModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then(mod => mod.TransactionModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then(mod => mod.ReportModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
