import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material/material.module';
import { UserService } from '../service';
import { BikeService } from '../service/bike.service';
import { MockBikeService } from '../shared/helper/mock-bike.service';
import { MockAutUser } from '../shared/helper/mock-user.service';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { BikeRoutingMododule } from './bike-routing.module';

import { BikeComponent } from './bike.component';

describe('BikeComponent', () => {
  let component: BikeComponent;
  let fixture: ComponentFixture<BikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        BikeRoutingMododule,
        ToolbarModule,
        MaterialModule,
        ReactiveFormsModule,
      ],
      providers: [{
        provide: UserService, useClass: MockAutUser
      },
      { provide: BikeService, useClass: MockBikeService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
