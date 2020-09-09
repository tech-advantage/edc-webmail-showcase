import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageComponent } from './info-page.component';
import { FakeTranslatePipe } from '../utils/test-helper';

describe('InfoPageComponent', () => {
  let component: InfoPageComponent;
  let fixture: ComponentFixture<InfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeTranslatePipe, InfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
