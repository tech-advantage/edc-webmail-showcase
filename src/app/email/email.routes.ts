import { Routes } from '@angular/router';
import { EmailComponent } from './email.component';

export const emailRoutes: Routes = [
  {
    path     : 'email/:account/:emailId',
    component: EmailComponent
  }
];
