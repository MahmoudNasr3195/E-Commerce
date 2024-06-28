import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule) },
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule) },
  { path: 'brands', loadChildren: () => import('./views/brands/brands.module').then(m => m.BrandsModule) },
  { path: 'categories', loadChildren: () => import('./views/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'cart', loadChildren: () => import('./views/cart/cart.module').then(m => m.CartModule) },
  { path: 'wishlist', loadChildren: () => import('./views/wishlist/wishlist.module').then(m => m.WishlistModule) },

  
  { path: '**', loadChildren: () => import('./views/error404/error404.module').then(m => m.Error404Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
