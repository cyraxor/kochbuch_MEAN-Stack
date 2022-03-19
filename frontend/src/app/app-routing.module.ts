import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ReceptsComponent } from './pages/recepts/recepts.component';

const routes: Routes = [
  {path: '', redirectTo: 'recepts', pathMatch: 'full' },
  {path: 'recepts', component: ReceptsComponent},
  {path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
