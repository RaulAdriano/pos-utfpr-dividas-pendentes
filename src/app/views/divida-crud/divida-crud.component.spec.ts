import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividaCrudComponent } from './divida-crud.component';

describe('DividaCrudComponent', () => {
  let component: DividaCrudComponent;
  let fixture: ComponentFixture<DividaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividaCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
