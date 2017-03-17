import { find } from 'lodash';
import { Injectable } from '@angular/core';
import { Email } from './email';
import { Observable } from 'rxjs';
import { EmailsData } from './emails-data';

@Injectable()
export class EmailService {

  emails = new EmailsData();

  getEmail(accountName: string, id: number): Observable<Email> {
    const mails = find(this.emails.eMailsList, {account: accountName});
    if (mails) {
      const mail = find(mails.emails, {id: id});
      if (mail) {
        return Observable.of(mail);
      } else {
        return Observable.throw('Email not found');
      }
    }
  }
}
