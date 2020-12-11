import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DnpComponent } from './dnp/dnp.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: 'donor',
    component: DnpComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
