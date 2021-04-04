import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomateComponent } from './automate/automate.component';

const routes: Routes = [
  { path: 'automate', component: AutomateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
