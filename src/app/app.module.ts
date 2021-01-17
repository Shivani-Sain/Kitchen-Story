import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
