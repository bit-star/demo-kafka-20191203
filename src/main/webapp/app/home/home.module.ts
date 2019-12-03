import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DemoKafka20191203SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [DemoKafka20191203SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class DemoKafka20191203HomeModule {}
