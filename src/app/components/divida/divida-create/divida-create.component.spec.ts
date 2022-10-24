import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaCreateComponent } from './divida-create.component';

describe('DividaCreateComponent', () => {
  let component: DividaCreateComponent;
  let fixture: ComponentFixture<DividaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
