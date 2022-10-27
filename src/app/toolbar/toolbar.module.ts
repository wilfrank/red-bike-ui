import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarRoutingModule } from './toobar-routing.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [MaterialModule, ToolbarRoutingModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
