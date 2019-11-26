import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

export const II18nPrefix = './i18n';
export const SYS_LANG = 'en';

export class TranslateLoader {

  constructor(private readonly http: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`${II18nPrefix}/${lang}.json`).pipe(
      catchError(() => this.http.get(`${II18nPrefix}/${SYS_LANG}.json`))
    );
  }
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateLoader(http);
}
