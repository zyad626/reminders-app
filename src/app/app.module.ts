import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {CustomInputComponent} from './custom-input/custom-input.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {LoginFormComponent} from './login-form/login-form.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {NavLinkComponent} from "./user-dashboard/sidelink/nav-link.component"
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CustomSearchComponent} from "./user-dashboard/custom-search/custom-search.component";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {UserInfoComponent} from "./user-dashboard/user-info/user-info.component";
import {UserTasksComponent} from "./user-dashboard/user-tasks/user-tasks.component";
import {DeletedTasksComponent} from "./user-dashboard/deleted-tasks/deleted-tasks.component";
import {FinishedTasksComponent} from "./user-dashboard/finished-tasks/finished-tasks.component";
import {ArchiveTasksComponent} from "./user-dashboard/archive-tasks/archive-tasks.component";
import {TaskRemainderComponent} from "./user-dashboard/task-remainder/task-remainder.component";
import {FormsModule} from "@angular/forms";
import {MainDashboardComponent} from "./user-dashboard/main-dashboard/main-dashboard.component";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    CustomInputComponent,
    LoginFormComponent,
    UserDashboardComponent,
    NavLinkComponent,
    CustomSearchComponent,
    UserInfoComponent,
    UserTasksComponent,
    DeletedTasksComponent,
    FinishedTasksComponent,
    ArchiveTasksComponent,
    TaskRemainderComponent,
    MainDashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
