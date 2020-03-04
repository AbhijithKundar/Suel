import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './pages/shared/notfound/notfound.component';

const routes: Routes = [
  { path: 'notfound', component: NotfoundComponent },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
  },
  {
    path: '',
    redirectTo: '/pages/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
