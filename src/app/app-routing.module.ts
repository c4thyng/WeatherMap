import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user-dashboard', pathMatch: 'full' }, // Landing page
  { path: 'user-dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
