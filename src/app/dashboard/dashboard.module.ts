import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,    
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
