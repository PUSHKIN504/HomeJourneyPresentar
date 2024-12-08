import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Requisito3Component } from './Requisito3.component';

describe('CategoriaViatico', () => {
  let component: Requisito3Component;
  let fixture: ComponentFixture<Requisito3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Requisito3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Requisito3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
