import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  BsDropdownModule, 
  ProgressbarModule, 
  TooltipModule 
} from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { ManageRoutes } from './manage.routing';
import { MyAccountComponent } from './my-account/my-account.component';
import { BillingComponent } from './billing/billing.component';
import { UsageComponent } from './usage/usage.component';
import { ServiceComponent } from './service/service.component';
import { OutagesComponent } from './outages/outages.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { EfficiencyComponent } from './efficiency/efficiency.component';


@NgModule({
  declarations: [
    MyAccountComponent,
    BillingComponent,
    UsageComponent,
    ServiceComponent,
    OutagesComponent,
    ComparisonComponent,
    EfficiencyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    LeafletModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forChild(ManageRoutes)
  ]
})
export class ManageModule { }
