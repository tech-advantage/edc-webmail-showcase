import { EMPTY, Observable, of, throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { Email } from './email';
import { EmailsData } from './emails-data';

@Injectable()
export class EmailService {

  emailData: EmailsData = new EmailsData();

  getEmail(accountName: string, id: number): Observable<Email | never> {
    if (!this.emailData || !this.emailData.eMailsList || !this.emailData.eMailsList.length) {
      return EMPTY;
    }
    const mails = this.emailData.eMailsList.find(mail => mail.account === accountName);
    if (mails && mails.emails && mails.emails.length) {
      const mail = mails.emails.find(m => m.id === id);
      if (mail) {
        return of(mail);
      } else {
        return throwError(() => Error('Email not found'));
      }
    }
    return EMPTY;
  }
}
