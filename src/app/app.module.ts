import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from './auth-guard.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { EditRoomTypeComponent } from './edit-room-type/edit-room-type.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FieldErrorDisplayComponent } from '../components/field-error-display/field-error-display.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'RoomType', component: RoomTypeComponent, canActivate: [AuthGuard] },
  { path: 'AddRoomType', component: AddRoomTypeComponent, canActivate: [AuthGuard] },
  { path: 'EditRoomType', component: EditRoomTypeComponent, data: {}, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RoomTypeComponent,
    AddRoomTypeComponent,
    EditRoomTypeComponent,
    HeaderComponent,
    FooterComponent,
    FieldErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
