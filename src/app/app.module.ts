import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { ListVendorComponent } from './vendor/list-vendor/list-vendor.component';
import { UpdateVendorComponent } from './vendor/update-vendor/update-vendor.component';
import { VendorViewComponent } from './vendor/vendor-view/vendor-view.component';
import { NavbarComponent } from './vendor/navbar/navbar.component';
import { SearchVendorComponent } from './vendor/search-vendor/search-vendor.component';
import { VerifyVendorComponent } from './vendor/verify-vendor/verify-vendor.component';
import { TempComponent } from './vendor/temp/temp.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import { Temp2Component } from './vendor/temp2/temp2.component';
import { LandingPageComponent } from './vendor/landing-page/landing-page.component';
import { RegisterMOmComponent } from './vendor/register-mom/register-mom.component';
import { LoginComponent } from './vendor/login/login.component';
import { SignUpComponent } from './vendor/sign-up/sign-up.component';
import { RegisterUserComponent } from './vendor/register-user/register-user.component';
import { SignMComponent } from './vendor/sign-m/sign-m.component';
import { SignUComponent } from './vendor/sign-u/sign-u.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { OrdersComponent } from './vendor/orders/orders.component';








@NgModule({
  declarations: [
    AppComponent,
    LearningComponent,
    AddVendorComponent,
    ListVendorComponent,
    UpdateVendorComponent,
    VendorViewComponent,
    NavbarComponent,
    SearchVendorComponent,
    VerifyVendorComponent,
    TempComponent,
    
         Temp2Component,
              LandingPageComponent,
              RegisterMOmComponent,
              LoginComponent,
              SignUpComponent,
              RegisterUserComponent,
              SignMComponent,
              SignUComponent,
              DashboardComponent,
              OrdersComponent
            
  
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
