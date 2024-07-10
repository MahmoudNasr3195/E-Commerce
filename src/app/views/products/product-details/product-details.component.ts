import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Products } from '../interfaces/products';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productId:string ='';
  productItem:any;
  productItemImages:string[] =[];
  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
items: MenuItem[] =[];
home: any ;
productList:Products[]=[];
relatedProducts:Products[] =[];
layout: string = 'list';
contentLoaded = false;

constructor(private _productsService:ProductsService,private _activatedRoute:ActivatedRoute,private _router:Router){}

  ngOnInit(): void {
    this.getProductId();
    this.getSpecificProduct(this.productId);
    this.getrelatedProducts();
    this.contentLoadedInterval();
  }
  getProductId(){
    this.productId = this._activatedRoute.snapshot.params['productId'];
  }
  getSpecificProduct(id:any){
    this._productsService.getSpecificProduct(id).subscribe({
      next:(response)=>{
        this.productItem = response.data;
        this.productItemImages = response.data.images;
        this.items = [
          { label: this.productItem?.category?.name , routerLink:['/categories/categoryDetails',this.productItem?.category?.name,this.productItem?.category?._id] },
          { label: this.productItem?.subcategory[0]?.name , routerLink:['/subCategories/subCategoryDetails',this.productItem?.subcategory[0]?.name,this.productItem?.subcategory[0]?._id] },
          { label: this.productItem?.brand?.name, routerLink:['/brands/brandDetails',this.productItem?.brand?.name,this.productItem?.brand?._id]}
        ];
        this.home = { icon: 'pi pi-home', routerLink: '/' };
      },
      error:(error)=>{}
    })
  }
  getrelatedProducts(){
    this._productsService.getAllProducts().subscribe({
      next:(response)=>{
        this.productList = response.data;
        this.relatedProducts = this.productList.filter(p =>p.subcategory[0]._id ==this.productItem?.subcategory[0]?._id)
      },
      error:(error)=>{
      }
    })
  }
  contentLoadedInterval(){
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
  getSelectedProduct(title:any,id:any){
    this._router.navigate(['/products/productDetails',title,id], { relativeTo: this._activatedRoute });
    this.getSpecificProduct(id);
  }
}