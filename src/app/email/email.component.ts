import {catchError, switchMap} from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from './email.service';
import {Email} from './email';

@Component({
  selector: 'app-email',
  styleUrls: ['email.less'],
  templateUrl: 'email.component.html'
})
export class EmailComponent implements OnInit {

  email: Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    if (this.route.params) {
      this.route.params.pipe(
        switchMap(params => {
          const emailId = +params['emailId'] + 1; // (+) converts string parameter to a number
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
}
