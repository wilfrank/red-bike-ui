import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { BikeService } from 'src/app/service/bike.service';
import { MockBikeService } from 'src/app/shared/helper/mock-bike.service';
import { ToolbarModule } from 'src/app/toolbar/toolbar.module';
import { BikeRoutingMododule } from '../bike-routing.module';

import { MngBikeComponent } from './mng-bike.component';

xdescribe('MngBikeComponent', () => {
  let component: MngBikeComponent;
  let fixture: ComponentFixture<MngBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MngBikeComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        BikeRoutingMododule,
        ToolbarModule,
        MaterialModule,
        ReactiveFormsModule,
      ],
      providers: [MAT_DIALOG_DATA, MatDialogRef, {
        provide: BikeService, useClass: MockBikeService
      }]
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
