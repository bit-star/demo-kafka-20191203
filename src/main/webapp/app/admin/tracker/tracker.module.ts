import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoKafka20191203SharedModule } from 'app/shared/shared.module';

import { JhiTrackerComponent } from './tracker.component';

import { trackerRoute } from './tracker.route';

@NgModule({
  imports: [DemoKafka20191203SharedModule, RouterModule.forChild([trackerRoute])],
  declarations: [JhiTrackerComponent]
})
export class TrackerModule {}
