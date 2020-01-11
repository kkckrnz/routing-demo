import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DepartmentOverviewComponent } from './components/department-overview/department-overview.component';
import { DepartmentContactComponent } from './components/department-contact/department-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
