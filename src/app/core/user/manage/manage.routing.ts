import { Routes } from '@angular/router';
import { MyAccountComponent } from './my-account/my-account.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ServiceComponent } from './service/service.component';
import { OutagesComponent } from './outages/outages.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { EfficiencyComponent } from './efficiency/efficiency.component';

export const ManageRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'my-account',
                component: MyAccountComponent
            },
            {
                path: 'billing',
                component: BillingComponent
            },
            {
                path: 'usage',
                component: UsageComponent
            },
            {
                path: 'service',
                component: ServiceComponent
            },
            {
                path: 'outages',
                component: OutagesComponent
            },
            {
                path: 'comparison',
                component: ComparisonComponent
            },
            {
                path: 'efficiency',
                component: EfficiencyComponent
            }
        ]
    }
]