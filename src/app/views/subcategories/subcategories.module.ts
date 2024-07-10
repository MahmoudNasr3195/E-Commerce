import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubcategoriesRoutingModule } from './subcategories-routing.module';
import { SubCategoryDetailsComponent } from './sub-category-details/sub-category-details.component';


@NgModule({
  declarations: [
    SubCategoryDetailsComponent
  ],
  imports: [
    CommonModule,
    SubcategoriesRoutingModule
  ]
})
export class SubcategoriesModule { }
