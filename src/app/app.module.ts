import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddApplicationComponent } from './add-application/add-application.component';
import { DataTablesModule } from 'angular-datatables';
import { HostelService } from './services/hostel.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RoomTypeComponent } from './room-type/room-type.component';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { EditRoomTypeComponent } from './edit-room-type/edit-room-type.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FieldErrorDisplayComponent } from '../components/field-error-display/field-error-display.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'changePassword', component: ChangePasswordComponent },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'addApplication', component: AddApplicationComponent, canActivate: [AuthGuard] },
  { path: 'homeAdmin', component: AdminHomeComponent, canActivate: [AuthGuard] },

  { path: 'RoomType', component: RoomTypeComponent, canActivate: [AuthGuard] },
  { path: 'AddRoomType', component: AddRoomTypeComponent, canActivate: [AuthGuard] },
  { path: 'EditRoomType', component: EditRoomTypeComponent, data: {}, canActivate: [AuthGuard] },

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoomTypeComponent,
    AddRoomTypeComponent,
    EditRoomTypeComponent,
    HeaderComponent,
    FooterComponent,
    FieldErrorDisplayComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    DashboardComponent,
    HomeComponent,
    AdminHomeComponent,
    AddApplicationComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard,
    HostelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
