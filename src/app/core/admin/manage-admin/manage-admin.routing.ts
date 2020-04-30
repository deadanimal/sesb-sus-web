import { Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ReportComponent } from './report/report.component';

export const ManageAdminRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'customer',
                component: CustomerComponent
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
                path: 'report',
                component: ReportComponent
            }
        ]
    }
]