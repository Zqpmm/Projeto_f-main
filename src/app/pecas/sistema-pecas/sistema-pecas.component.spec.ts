import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaPecasComponent } from './sistema-pecas.component';

describe('SistemaPecasComponent', () => {
  let component: SistemaPecasComponent;
  let fixture: ComponentFixture<SistemaPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemaPecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
