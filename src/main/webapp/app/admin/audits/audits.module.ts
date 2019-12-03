import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoKafka20191203SharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [DemoKafka20191203SharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
