import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

  { path: 'createNewOrder', loadChildren: './systemAdministration/create-new-order/create-new-order.module#CreateNewOrderPageModule', canActivate: [AuthGuard] },

  { path: 'address', loadChildren: './systemAdministration/address/address.module#AddressPageModule', canActivate: [AuthGuard] },
  
  { path: 'frequency', loadChildren: './systemAdministration/frequency/frequency.module#FrequencyPageModule', canActivate: [AuthGuard] },
  
  { path: 'jobSetting', loadChildren: './systemAdministration/job-setting/job-setting.module#JobSettingPageModule', canActivate: [AuthGuard] },
  
  { path: 'orderPreference', loadChildren: './systemAdministration/order-preference/order-preference.module#OrderPreferencePageModule', canActivate: [AuthGuard] },
  
  { path: 'payment/:newOrder', loadChildren: './systemAdministration/payment/payment.module#PaymentPageModule', canActivate: [AuthGuard] },
  
  { path: 'viewAllOrders', loadChildren: './systemAdministration/view-all-orders/view-all-orders.module#ViewAllOrdersPageModule', canActivate: [AuthGuard] },
  
  { path: 'viewMap', loadChildren: './view-map/view-map.module#ViewMapPageModule' },
  
  { path: 'success', loadChildren:'./success/success.module#SuccessPageModule' },
  
  { path: 'barcode', loadChildren: './barcode/barcode.module#BarcodePageModule' },
  
  { path: 'packages', loadChildren:'./package/package.module#PackagePageModule'},

  { path: 'register', loadChildren:'./register/register.module#RegisterPageModule'},
  
  { path: 'map', loadChildren: './systemAdministration/map/map.module#MapPageModule'},  

  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
