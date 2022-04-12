import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompareComponent } from './compare/compare.component';
import { ViewJsonComponent } from './view-json/view-json.component';

const routes: Routes = [
  {path: 'view', component: ViewJsonComponent},
  {path: 'compare', component: CompareComponent},
  {path: '', redirectTo: 'view', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
