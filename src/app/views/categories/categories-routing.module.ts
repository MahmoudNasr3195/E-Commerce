import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { CategoryDetailsComponent } from './category-details/category-details.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent , pathMatch:'prefix'},
  { path: 'categoryDetails/:categoryName/:categoryId', canActivate:[AuthGuard], component: CategoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
