import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuzgadosPage } from './juzgados.page';

describe('JuzgadosPage', () => {
  let component: JuzgadosPage;
  let fixture: ComponentFixture<JuzgadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuzgadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuzgadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
