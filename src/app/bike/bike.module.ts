import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponent } from './bike.component';
import { BikeRoutingMododule } from './bike-routing.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { MaterialModule } from '../material/material.module';
import { MngBikeComponent } from './mng-bike/mng-bike.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BikeComponent, MngBikeComponent],
  imports: [
    CommonModule,
    BikeRoutingMododule,
    ToolbarModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class BikeModule {}
