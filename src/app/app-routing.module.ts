
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsNormalComponent } from './details-normal/details-normal.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RoleguardGuard } from './roleguard.guard';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { UpdateComponent } from './update/update.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: "app-details", component: DetailsComponent },
  {path:"app-home",component:HomeComponent},
  {path:"app-create",component:CreateComponent},
  { path: "app-update/:id", component: UpdateComponent},
  { path: "app-delete/:id", component:  DeleteComponent},
  { path: "app-cart", component:  CartComponent},
  { path: "app-checkout", component:  CheckoutComponent},//,canActivate:[AuthGuard]
  { path: "app-success",component: SuccessComponent},
  {path:"app-login",component:LoginComponent},
  {path:"app-signup",component:SignupComponent},
  {path:"app-search",component:SearchComponent},
  {path:"app-admin",component:AdminComponent},
  {path:"app-logout",component:LogoutComponent},
  {path:"app-changepassword",component:ChangepasswordComponent},
  {path:"app-details-normal/:id",component:DetailsNormalComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
