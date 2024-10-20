import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsComponent } from './brands.component';
import { BrandDetailsComponent } from './brand-details/brand-details.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    BrandsComponent,
    BrandDetailsComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    TranslateModule.forChild(),
    HttpClientModule,
    ProgressSpinnerModule,
    CardModule,

  ]
})
export class BrandsModule { }
