import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaReadComponent } from './divida-read.component';

describe('DividaReadComponent', () => {
  let component: DividaReadComponent;
  let fixture: ComponentFixture<DividaReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
