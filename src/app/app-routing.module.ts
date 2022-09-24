import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVendorComponent } from './vendor/add-vendor/add-vendor.component';
import { DashboardComponent } from './vendor/dashboard/dashboard.component';
import { ListVendorComponent } from './vendor/list-vendor/list-vendor.component';
import { LoginComponent } from './vendor/login/login.component';
import { SearchVendorComponent } from './vendor/search-vendor/search-vendor.component';
import { SignMComponent } from './vendor/sign-m/sign-m.component';
import { SignUComponent } from './vendor/sign-u/sign-u.component';
import { SignUpComponent } from './vendor/sign-up/sign-up.component';
import { TempComponent } from './vendor/temp/temp.component';
import { UpdateVendorComponent } from './vendor/update-vendor/update-vendor.component';
import { VendorViewComponent } from './vendor/vendor-view/vendor-view.component';
import { VerifyVendorComponent } from './vendor/verify-vendor/verify-vendor.component';

const routes: Routes = [
 {
    path:"list", component:ListVendorComponent
 },
 {
  path:"add", component:AddVendorComponent
},
  {
      path:"update/:id", component:UpdateVendorComponent
  },
  {
    path:"view/:id", component:VendorViewComponent
},
{
  path:"search/:vendorName", component:SearchVendorComponent
},
{
  path:"verify", component:VerifyVendorComponent
},
{
  path:"temp", component:TempComponent
},
{
  path:"login", component:LoginComponent
},
{
  path:"sign", component:SignUpComponent
},
{
  path:"signM", component:SignMComponent
},
{
  path:"signU", component:SignUComponent
},
{
  path:"dashboard", component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
