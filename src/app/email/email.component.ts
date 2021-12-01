import { catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from './email.service';
import { Email } from './email';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-email',
  styleUrls: ['email.less'],
  templateUrl: 'email.component.html'
})
export class EmailComponent implements OnInit {

  email: Email | undefined;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService,
    private readonly translateService: TranslateService
  ) {}

  ngOnInit(): void {
    if (this.route.params) {
      this.route.params.pipe(
        switchMap(params => {
          const emailId = +params['emailId'] + 1;
          const account = params['account'];
          return this.emailService.getEmail(account, emailId);
        }),
        catchError(err => {
          console.error(err);
          return EMPTY;
        })
      ).subscribe((email: Email) => this.email = email);
    }
  }

  getLang(): string {
    return this.translateService.currentLang;
  }
}
