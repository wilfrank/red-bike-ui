import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from '../login/login.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MaterialModule } from '../material/material.module';
import { MapModule } from '../map/map.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    LoginModule,
    ToolbarModule,
    MapModule,
  ],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
