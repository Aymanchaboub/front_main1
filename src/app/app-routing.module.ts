
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from './_services/auth.guard';
import { CtaegorieCreateComponent } from './categorie/ctaegorie-create/ctaegorie-create.component';
import { CorsInterceptor } from './_services/cors.interceptor'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './_services/AuthInterceptor'; 
import { CtegorieCreateComponent } from './componement/ctegorie-create/ctegorie-create.component';




const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'checkout',component:CheckoutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  {path :'create', component:CtaegorieCreateComponent},
  {path:'add',component:CtegorieCreateComponent},
  {path:'create',component:CtaegorieCreateComponent},



  { path: 'admin', component: BoardAdminComponent , canActivate: [AuthGuard] },



  {path:'cart',component:CartComponent}
];

@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CorsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
})
export class AppRoutingModule { }
