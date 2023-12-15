import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'store',
    component: StoreComponent,
    title: 'Store Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Page',
  },
  {
    path: 'login-signup',
    component: LoginSignupComponent,
    title: 'Login/Signup Page',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart Page',
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
    title: 'Thankyou Page',
  },
];
