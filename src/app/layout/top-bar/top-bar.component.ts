import { Component, OnInit } from '@angular/core';
import { TranslationService } from 'src/app/shared/core/i18n/translation.service';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  lang: string = '';
  constructor(
    private _utilService: UtilService,
    private _translationService: TranslationService
  ){}
  ngOnInit(): void {}

  setLanguage() {
    let lang = localStorage.getItem("lang");
    if (lang && lang === "en") {
      lang = "ar";

    } else {
      lang = "en";

    }
    // set language
    this._translationService.setLanguage(lang);
    // switch direction
    this._utilService.switchDirection(lang);
    // switch direction
    this._utilService.switchLang(lang);
    // reload root after change lang
    location.reload();
    //this.reloadCurrentRoute();
    // Lang
    this.lang = lang;
  }

}
