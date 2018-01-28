import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UserDetailsComponent } from './components/user-details/user-details.component'
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
{ path: '', component: DashboardComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'user/:id', component: UserDetailsComponent},
{ path: 'user/add', component: AddUserComponent},
{ path: 'user/edit/:id', component: EditUserComponent},
{ path: 'settings', component: SettingsComponent},
{ path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
