import { EMPTY, Observable, of, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Email } from './email';
import { EmailsData } from './emails-data';

@Injectable()
export class EmailService {

  emails = new EmailsData();

  getEmail(accountName: string, id: number): Observable<Email | void> {
    if (!this.emails || !this.emails.eMailsList || !this.emails.eMailsList.length) {
      return EMPTY;
    }
    const mails = this.emails.eMailsList.find(mail => mail.account === accountName);
    if (mails && mails.emails && mails.emails.length) {
      const mail = mails.emails.find(m => m.id === id);
      if (mail) {
        return of(mail);
      } else {
        return throwError('Email not found');
      }
    }
  }
}
