import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requisito1Component } from './Requisito1.component';

describe('CategoriaViatico', () => {
  let component: Requisito1Component;
  let fixture: ComponentFixture<Requisito1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requisito1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requisito1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
