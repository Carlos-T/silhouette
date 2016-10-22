import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'settings', component: SettingsComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
