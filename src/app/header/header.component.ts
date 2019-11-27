import { Component } from '@angular/core';
import { LANGUAGE_CODES } from 'edc-popover-ng';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.less']
})
export class HeaderComponent {
  lang = 'en';
  languages = LANGUAGE_CODES;
  private readonly definedTranslations = ['en', 'fr', 'ru', 'vi', 'zh'];

  constructor(private readonly translateService: TranslateService) { }

  isTranslationDefined(language: string): boolean {
    return this.definedTranslations.indexOf(language) > -1;
  }

  onLangChange(lang: string): void {
    this.translateService.use(lang);
  }
}
