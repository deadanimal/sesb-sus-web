import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule 
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { ManageAdminRoutes } from './manage-admin.routing';
import { CustomerComponent } from './customer/customer.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [CustomerComponent, BillingComponent, UsageComponent, ReportComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(ManageAdminRoutes)
  ]
})
export class ManageAdminModule { }
