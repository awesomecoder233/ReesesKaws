import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'dashboard', component: DashboardComponent },  
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}