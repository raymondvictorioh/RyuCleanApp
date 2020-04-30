import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { SliderGuard } from './guards/slider.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [SliderGuard] },

  { path: 'createNewOrder', loadChildren: './systemAdministration/create-new-order/create-new-order.module#CreateNewOrderPageModule', canActivate: [AuthGuard] },

  { path: 'address', loadChildren: './systemAdministration/address/address.module#AddressPageModule', canActivate: [AuthGuard] },

  { path: 'frequency', loadChildren: './systemAdministration/frequency/frequency.module#FrequencyPageModule', canActivate: [AuthGuard] },

  { path: 'frequency/:planId', loadChildren: './systemAdministration/frequency/frequency.module#FrequencyPageModule', canActivate: [AuthGuard] },

  { path: 'jobSetting', loadChildren: './systemAdministration/job-setting/job-setting.module#JobSettingPageModule', canActivate: [AuthGuard] },

  { path: 'orderPreference', loadChildren: './systemAdministration/order-preference/order-preference.module#OrderPreferencePageModule', canActivate: [AuthGuard] },

  { path: 'payment/:newOrder', loadChildren: './systemAdministration/payment/payment.module#PaymentPageModule', canActivate: [AuthGuard] },

  { path: 'viewAllOrders', loadChildren: './systemAdministration/view-all-orders/view-all-orders.module#ViewAllOrdersPageModule', canActivate: [AuthGuard] },

  { path: 'viewMap', loadChildren: './view-map/view-map.module#ViewMapPageModule' },

  { path: 'success', loadChildren: './success/success.module#SuccessPageModule' },

  { path: 'barcode', loadChildren: './barcode/barcode.module#BarcodePageModule' },

  { path: 'packages', loadChildren: './package/package.module#PackagePageModule', canActivate: [AuthGuard] },

  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },

  { path: 'map', loadChildren: './systemAdministration/map/map.module#MapPageModule' },

  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },

  { path: 'slider', loadChildren: './slider/slider.module#SliderPageModule' },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule', canActivate: [AuthGuard]
  },
  {
    path: 'past-order',
    loadChildren: './systemAdministration/past-order/past-order.module#PastOrderPageModule', canActivate: [AuthGuard]
  },
  {
    path: 'scheduled-order',
    loadChildren: './systemAdministration/scheduled-order/scheduled-order.module#ScheduledOrderPageModule'
  },
  // {
  //   path: 'view-job-details',
  //   loadChildren: () => import('./systemAdministration/view-job-details/view-job-details.module').then(m => m.ViewJobDetailsPageModule)
  // },
  {
    path: 'account-settings',
    loadChildren: './account-settings/account-settings.module#AccountSettingsPageModule'
  },
  {
    path: 'edit-name',
    loadChildren: () => import('./accountSettingsFolder/edit-name/edit-name.module').then(m => m.EditNamePageModule)
  },
  {
    path: 'edit-password',
    loadChildren: () => import('./accountSettingsFolder/edit-password/edit-password.module').then(m => m.EditPasswordPageModule)
  },
  {
    path: 'edit-contact-number',
    loadChildren: () => import('./accountSettingsFolder/edit-contact-number/edit-contact-number.module').then(m => m.EditContactNumberPageModule)
  },
  {
    path: 'edit-credit-card',
    loadChildren: () => import('./accountSettingsFolder/edit-credit-card/edit-credit-card.module').then(m => m.EditCreditCardPageModule)
  },

  // { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },

  // { path: 'past-order', loadChildren: './systemAdministration/past-order/past-order.module#PastOrderPageModule'},

  // { path: 'scheduled-order', loadChildren: './systemAdministration/scheduled-order/scheduled-order.module#ScheduledOrderPageModule' },

  { path: 'view-job-details', loadChildren: './systemAdministration/view-job-details/view-job-details.module#ViewJobDetailsPageModule' },

  { path: 'date-setting', loadChildren: './systemAdministration/date-setting/date-setting.module#DateSettingPageModule' },

  { path: 'barcode-modal/:jobId', loadChildren: './systemAdministration/barcode-modal/barcode-modal.module#BarcodeModalPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
