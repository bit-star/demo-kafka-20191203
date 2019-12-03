import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DemoKafka20191203SharedModule } from 'app/shared/shared.module';
import { DemoKafka20191203CoreModule } from 'app/core/core.module';
import { DemoKafka20191203AppRoutingModule } from './app-routing.module';
import { DemoKafka20191203HomeModule } from './home/home.module';
import { DemoKafka20191203EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DemoKafka20191203SharedModule,
    DemoKafka20191203CoreModule,
    DemoKafka20191203HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DemoKafka20191203EntityModule,
    DemoKafka20191203AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class DemoKafka20191203AppModule {}
