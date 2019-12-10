import { find } from 'lodash';
import { Observable, of, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Email } from './email';
import { EmailsData } from './emails-data';

@Injectable()
export class EmailService {

  emails = new EmailsData();

  getEmail(accountName: string, id: number): Observable<Email> {
    const mails = find(this.emails.eMailsList, {account: accountName});
    if (mails) {
      const mail = find(mails.emails, {id});
      if (mail) {
        return of(mail);
      } else {
        return throwError('Email not found');
      }
    }
  }
}
