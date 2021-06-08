import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeAppoinmentComponent } from './components/make-appoinment/make-appoinment.component';

const routes: Routes = [
  {
    path: '',
    component : MakeAppoinmentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
