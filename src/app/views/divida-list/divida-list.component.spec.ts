import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaListComponent } from './divida-list.component';

describe('DividaListComponent', () => {
  let component: DividaListComponent;
  let fixture: ComponentFixture<DividaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
