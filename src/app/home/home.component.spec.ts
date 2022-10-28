import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginModule } from '../login/login.module';
import { MapModule } from '../map/map.module';
import { MaterialModule } from '../material/material.module';
import { UserService } from '../service';
import { BikeService } from '../service/bike.service';
import { MockBikeService } from '../shared/helper/mock-bike.service';
import { MockAutUser } from '../shared/helper/mock-user.service';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        LoginModule,
        ToolbarModule,
        MapModule,
      ],
      providers: [MatDialog, {
        provide: UserService, useClass: MockAutUser
      },
        {
          provide: BikeService, useClass: MockBikeService
        }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
