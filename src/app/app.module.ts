import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

// firebase db
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { EditUserComponent } from './components/edit-user/edit-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// services
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    EditUserComponent,
    AddUserComponent,
    UsersComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'birthday' ),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
