import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: ProjectComponent },
  { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
