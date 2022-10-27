import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MngBikeComponent } from './mng-bike.component';

describe('MngBikeComponent', () => {
  let component: MngBikeComponent;
  let fixture: ComponentFixture<MngBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MngBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MngBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
