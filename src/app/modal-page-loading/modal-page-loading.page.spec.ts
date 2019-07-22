import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPageLoadingPage } from './modal-page-loading.page';

describe('ModalPageLoadingPage', () => {
  let component: ModalPageLoadingPage;
  let fixture: ComponentFixture<ModalPageLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPageLoadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPageLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
