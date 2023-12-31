import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCreateComponent } from './cat-create.component';

describe('CatCreateComponent', () => {
  let component: CatCreateComponent;
  let fixture: ComponentFixture<CatCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
