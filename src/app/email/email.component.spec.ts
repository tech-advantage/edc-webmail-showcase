import { of } from 'rxjs';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailComponent } from './email.component';
import { ActivatedRoute } from '@angular/router';
import { mockServices } from '../utils/test-helper';
import { EmailService } from './email.service';
import { Email } from './email';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('EmailComponent', () => {
  let component: EmailComponent;
  let activatedRoute: ActivatedRoute;
  let emailService: EmailService;
  let fixture: ComponentFixture<EmailComponent>;

  let email: Email;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailComponent ],
      providers: [
        mockServices(ActivatedRoute),
        mockServices(EmailService, ['getEmail']),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  }));

  beforeEach(() => {
    activatedRoute = TestBed.get(ActivatedRoute);
    emailService = TestBed.get(EmailService);
  });

  beforeEach(async(() => {
    email = new Email(1, 'le_sujet', ['sender@mail.com'], '10032017', 'mon_contenu');
    //
    activatedRoute.params = of({account: 'myAccount', emailId: '0'});
    spyOn(emailService, 'getEmail').and.returnValue(of(email));

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
