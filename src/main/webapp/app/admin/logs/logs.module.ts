import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DemoKafka20191203SharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [DemoKafka20191203SharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
