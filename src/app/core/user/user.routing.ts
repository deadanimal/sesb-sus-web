import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'manage',
                loadChildren: './manage/manage.module#ManageModule'
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
]