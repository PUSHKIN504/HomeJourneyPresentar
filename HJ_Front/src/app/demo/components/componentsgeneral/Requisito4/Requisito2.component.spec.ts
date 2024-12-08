import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requisito2Component } from './Requisito2.component';

describe('CategoriaViatico', () => {
  let component: Requisito2Component;
  let fixture: ComponentFixture<Requisito2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requisito2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requisito2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
