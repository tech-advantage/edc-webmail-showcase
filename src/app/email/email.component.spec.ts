import { of } from 'rxjs';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailComponent } from './email.component';
import { ActivatedRoute } from '@angular/router';
import { mockServices } from '../utils/test-helper';
import { EmailService } from './email.service';
import { Email } from './email';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let activatedRoute: ActivatedRoute;
  let emailService: EmailService;
  let fixture: ComponentFixture<EmailComponent>;

  let email: Email;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailComponent ],
      providers: [
        mockServices(ActivatedRoute),
        mockServices(EmailService, ['getEmail']),
        mockServices(TranslateService),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  beforeEach(() => {
    activatedRoute = TestBed.inject<ActivatedRoute>(ActivatedRoute);
    emailService = TestBed.inject<EmailService>(EmailService);
  });

  beforeEach(() => {
    email = new Email(1, 'le_sujet', ['sender@mail.com'], '10032017', 'mon_contenu');
    //
    activatedRoute.params = of({account: 'myAccount', emailId: '0'});
    spyOn(emailService, 'getEmail').and.returnValue(of(email));

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
