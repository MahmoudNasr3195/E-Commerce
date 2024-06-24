import { Component } from '@angular/core';
import { TranslationService } from './shared/core/i18n/translation.service';
import { UtilService } from './shared/services/util.service';
import { LanguagesEnum } from './shared/enums/LanguagesEnum';
import { locale as arLang } from './shared/core/i18n/ar';
import { locale as enLang } from './shared/core/i18n/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'E-Commerce';
  lang: string = '';
  
  constructor(
    private _translationService: TranslationService,
    private _utilService: UtilService) {

    // Set Language
    let lang = localStorage.getItem("lang");
    if (lang) {
      this.lang = lang;
    } else {
      this.lang = LanguagesEnum.English
      localStorage.setItem("lang", this.lang)
    }

    this._translationService.setLanguage(this.lang);
    this._utilService.switchLang(this.lang);
    this._utilService.switchDirection(this.lang);
    this._translationService.loadTranslations(enLang, arLang);
  }
}
