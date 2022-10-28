import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material/material.module';
import { UserService } from '../service';
import { MockAutUser } from '../shared/helper/mock-user.service';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        LoginRoutingModule,
      ],
      providers: [MatDialogRef, {
        provide: UserService, useClass: MockAutUser
      }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
