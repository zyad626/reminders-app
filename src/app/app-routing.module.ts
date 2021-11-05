import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {UserInfoComponent} from "./user-dashboard/user-info/user-info.component";
import {UserTasksComponent} from "./user-dashboard/user-tasks/user-tasks.component";
import {DeletedTasksComponent} from "./user-dashboard/deleted-tasks/deleted-tasks.component";
import {FinishedTasksComponent} from "./user-dashboard/finished-tasks/finished-tasks.component";
import {ArchiveTasksComponent} from "./user-dashboard/archive-tasks/archive-tasks.component";
import {TaskRemainderComponent} from "./user-dashboard/task-remainder/task-remainder.component";
import {MainDashboardComponent} from "./user-dashboard/main-dashboard/main-dashboard.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: "register",
    component: RegistrationFormComponent
  },
  {
    path: "login",
    component: LoginFormComponent
  },
  {
    path: "dashboard",
    component: UserDashboardComponent,
    children: [
      {
        path: "",
        component: UserInfoComponent
      },
      {
        path: 'tasks',
        component: UserTasksComponent
      },
      {
        path: 'trash',
        component: DeletedTasksComponent
      },
      {
        path: 'pocket',
        component: FinishedTasksComponent
      },
      {
        path: 'archives',
        component: ArchiveTasksComponent
      },
      {
        path: 'remainders',
        component: TaskRemainderComponent
      },
      {
        path: "dashboard",
        component: MainDashboardComponent
      }
    ]
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
