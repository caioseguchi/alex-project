import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuildResumeComponent } from './pages/build-resume/build-resume.component';
import { WritteBulletsComponent } from './pages/writte-bullets/writte-bullets.component';
import { ApplyProComponent } from './pages/apply-pro/apply-pro.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'build-resume',
    component: BuildResumeComponent,
  },
  {
    path: 'writte-bullets',
    component: WritteBulletsComponent,
  },
  {
    path: 'apply-pro',
    component: ApplyProComponent,
  },
];
