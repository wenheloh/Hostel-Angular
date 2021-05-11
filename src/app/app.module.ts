import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./auth-guard.service";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { HomeComponent } from "./home/home.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AddApplicationComponent } from "./add-application/add-application.component";
import { HostelService } from "./services/hostel.service";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RoomTypeComponent } from "./room-type/room-type.component";
import { AddRoomTypeComponent } from "./add-room-type/add-room-type.component";
import { EditRoomTypeComponent } from "./edit-room-type/edit-room-type.component";
import { FieldErrorDisplayComponent } from "../components/field-error-display/field-error-display.component";

const appRoutes: Routes = [
	{path: "", component: LoginComponent, canActivate: [AuthGuard]},
	{path: "login", component: LoginComponent, canActivate: [AuthGuard]},
	{path: "register", component: RegisterComponent, canActivate: [AuthGuard]},
	{path: "forgotPassword", component: ForgotPasswordComponent, canActivate: [AuthGuard]},
	{path: "editProfile", component: EditProfileComponent, canActivate: [AuthGuard]},
	{path: "changePassword", component: ChangePasswordComponent, canActivate: [AuthGuard]},
	{path: "home", component: HomeComponent, canActivate: [AuthGuard]},
	{path: "addApplication", component: AddApplicationComponent, canActivate: [AuthGuard]},

	{path: "homeAdmin", component: AdminHomeComponent, canActivate: [AuthGuard]},
	{path: "RoomType", component: RoomTypeComponent, canActivate: [AuthGuard]},
	{path: "AddRoomType", component: AddRoomTypeComponent, canActivate: [AuthGuard]},
	{path: "EditRoomType", component: EditRoomTypeComponent, data: {}, canActivate: [AuthGuard]},

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
		HomeComponent,
		AdminHomeComponent,
		AddApplicationComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes),
		HttpClientModule,
		ReactiveFormsModule,
	],
	providers: [
		AuthGuard,
		HostelService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
