import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { EmailComponent } from './email/email.component';
import { TreeComponent } from './left-sidebar/tree/tree.component';
import { EmailService } from './email/email.service';
import { TreeElementComponent } from './left-sidebar/tree/tree-element/tree-element.component';
import { HelpModule, PopoverConfigurationHandler } from 'edc-popover-ng';
import { PopoverConfigHandler } from 'app/utils/popover-config-handler';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    InfoPageComponent,
    EmailComponent,
    TreeComponent,
    TreeElementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HelpModule.forRoot({
      configLoader: {provide: PopoverConfigurationHandler, useClass: PopoverConfigHandler}
    })
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
