import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Products } from '../../products/interfaces/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products-on-sub-category',
  templateUrl: './all-products-on-sub-category.component.html',
  styleUrls: ['./all-products-on-sub-category.component.scss']
})
export class AllProductsOnSubCategoryComponent {

  lang = localStorage.getItem('lang');
  subCategoryId: string = '';
  productList: Products[] = [];
  productListOnSubCategory: Products[] = [];
  layout: string = 'list';
  contentLoaded = false;
  isthereDiscount: boolean = false;
  searchTerm: string = '';

  constructor(private _categoriesService: CategoriesService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getSubcategoryId();
    this.getAllProducts();
    this.contentLoadedInterval();
  }

  getSubcategoryId() {
    this.subCategoryId = this._activatedRoute.snapshot.params["subcategoryId"];
  }

  getAllProducts() {
    this._categoriesService.getAllProducts().subscribe({
      next: (response) => {
        this.productList = response.data;
        this.productListOnSubCategory = this.productList.filter(p => p.subcategory[0]._id == this.subCategoryId);

      },
      error: (error) => {
      }
    })
  }

  contentLoadedInterval() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }

}
