import { Component } from '@angular/core';
import { IconBehavior, LANGUAGE_CODES, PopoverBehavior } from 'edc-popover-ng';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.less']
})
export class HeaderComponent {
  lang = 'en';
  languages = LANGUAGE_CODES;
  failBehavior = {
    icon: IconBehavior,
    popover: PopoverBehavior
  };
  private readonly definedTranslations = ['en', 'fr'];

  constructor(private readonly translateService: TranslateService) { }

  isTranslationDefined(language: string): boolean {
    return this.definedTranslations.indexOf(language) > -1;
  }

  onLangChange(lang: string): void {
    this.translateService.use(lang);
  }
}
