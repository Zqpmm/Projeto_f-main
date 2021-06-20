import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPecasComponent } from './cadastro-pecas.component';

describe('CadastroPecasComponent', () => {
  let component: CadastroPecasComponent;
  let fixture: ComponentFixture<CadastroPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
