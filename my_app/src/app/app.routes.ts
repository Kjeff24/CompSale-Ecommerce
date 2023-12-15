import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'CompSales | Home',
  },
  {
    path: 'store',
    component: StoreComponent,
    title: 'CompSales | Store',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'CompSales | About',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'CompSales | Contact',
  },
  {
    path: 'login-signup',
    component: LoginSignupComponent,
    title: 'CompSales | Login/Signup',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'CompSales | Cart',
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
    title: 'CompSales | Thankyou',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'CompSales | Checkout',
  },
];
