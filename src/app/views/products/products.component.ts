import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Products } from './interfaces/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit{
  lang = localStorage.getItem('lang');
  productList:Products[]=[];
  layout: string = 'list';
  contentLoaded = false;
  isthereDiscount:boolean=false;

  constructor(private _productsService:ProductsService){}
  ngOnInit(): void {
    this.getAllProducts();
    this.contentLoadedInterval();
  }

  getAllProducts(){
    this._productsService.getAllProducts().subscribe({
      next:(response)=>{
        this.productList = response.data;
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


}
