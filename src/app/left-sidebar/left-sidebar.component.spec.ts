import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarComponent } from './left-sidebar.component';
import { TreeComponent } from './tree/tree.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { mockServices } from '../utils/test-helper';
import { TranslateService } from '@ngx-translate/core';

describe('LeftSidebarComponent', () => {
  let component: LeftSidebarComponent;
  let fixture: ComponentFixture<LeftSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSidebarComponent, TreeComponent ],
      providers: [
        mockServices(TranslateService)
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
