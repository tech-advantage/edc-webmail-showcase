import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPageComponent } from './info-page/info-page.component';
import { emailRoutes } from './email/email.routes';

const routes: Routes = [
  {
    path: '',
    children: [
      ... emailRoutes,
      { path: '**', component: InfoPageComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
