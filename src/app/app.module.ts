import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../config/translate-loader';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HelpModule.forRoot({
      configLoader: { provide: PopoverConfigurationHandler, useClass: PopoverConfigHandler }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSidebarComponent,
    InfoPageComponent,
    EmailComponent,
    TreeComponent,
    TreeElementComponent
  ],
  providers: [
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
