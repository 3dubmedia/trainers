import { Routes, RouterModule } from '@angular/router';

import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/trainers',
    pathMatch: 'full'
  },
  {
    path: 'trainers',
    component: TrainerListComponent
  },
  {
    path: 'trainer/:id',
    component: TrainerDetailComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

];

export const routing = RouterModule.forRoot(appRoutes);

