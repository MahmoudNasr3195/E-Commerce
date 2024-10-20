import { Component, OnInit } from '@angular/core';
import { SbrandService } from './services/sbrand.service';
import { error } from '@rxweb/reactive-form-validators';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { Ibrand } from './interfaces/ibrand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
  brandsList:Ibrand[]=[];

  constructor(
    private _sbrandService:SbrandService,
    private _messageService: MessageService,
    private _translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.GetAlBrands();
  }

  GetAlBrands(){
    this._sbrandService.GetAlBrands().subscribe({
      next:(response)=>{
        this.brandsList=response.data;
      },
      error:(error)=>{
        this._messageService.clear();
        this._messageService.add({ severity: 'error', summary: this._translateService.instant('FORM.DIALOG_MESSAGE.ERROR_MESSAGE'), detail: this._translateService.instant('FORM.DIALOG_MESSAGE.UNKNOWN_ERROR'), sticky: true });

      }
    })
  }

}
