import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaDeleteComponent } from './divida-delete.component';

describe('DividaDeleteComponent', () => {
  let component: DividaDeleteComponent;
  let fixture: ComponentFixture<DividaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
