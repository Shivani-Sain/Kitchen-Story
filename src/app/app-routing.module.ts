import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: "app-details", component: DetailsComponent },
  {path:"app-home",component:HomeComponent},
  {path:"app-create",component:CreateComponent},
  { path: "app-update/:id", component: UpdateComponent},
  { path: "app-delete/:id", component:  DeleteComponent},
  { path: "app-cart/:id", component:  CartComponent},
  { path: "app-checkout", component:  CheckoutComponent},
  { path: "app-success",component: SuccessComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
