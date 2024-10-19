import { Component, OnInit } from '@angular/core';
import { Products } from '../interfaces/products';
import { HomeServiceService } from '../services/home-service.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit{
  lang = localStorage.getItem('lang');
  productList:Products[]=[];
  layout: string = 'list';
  contentLoaded = false;
  isthereDiscount:boolean=false;
  searchTerm:string='';

  constructor(private _homeService:HomeServiceService){}

  ngOnInit(): void {
    this.getAllProducts();
    this.contentLoadedInterval();
  }

  getAllProducts(){
    this._homeService.getAllProducts().subscribe({
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
