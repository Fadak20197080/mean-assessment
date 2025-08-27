import { Route } from '@angular/router';
import { LoginComponent } from './auth/components/login.component';
import { SignupComponent } from './auth/components/signup.component';
import { DashboardComponent } from './dashboard/components/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];
