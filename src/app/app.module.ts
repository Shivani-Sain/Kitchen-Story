import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AutheService } from './authe.service';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchpipePipe } from './searchpipe.pipe';
import { DetailsNormalComponent } from './details-normal/details-normal.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RoleguardGuard } from './roleguard.guard';
import { CartService } from './cart.service';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    CartComponent,
    CheckoutComponent,
    SuccessComponent,
    SearchComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    LogoutComponent,
    SearchpipePipe,
    DetailsNormalComponent,
    ChangepasswordComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [AutheService,AuthGuard,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
