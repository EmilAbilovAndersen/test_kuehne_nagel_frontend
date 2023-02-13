import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesPage } from '../pages/citties/cities.page';

const routes: Routes = [{
  path: '', component: CitiesPage,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
