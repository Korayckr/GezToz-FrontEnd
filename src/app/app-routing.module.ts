import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './modules/auth/loginpage/loginpage.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { HousesComponent } from './houses/houses.component';
import { ContactComponent } from './Contacts/contact/contact.component';
import { SidebarComponent } from './modules/dashboard/sidebar/sidebar.component';
import { PaymentComponent } from './modules/dashboard/payment/payment.component';
import { AdvertsComponent } from './modules/dashboard/adverts/adverts.component';
import { SupportComponent } from './modules/dashboard/support/support.component';
import { ProfileInfoComponent } from './modules/dashboard/profile-info/profile-info.component';
import { AddUserComponent } from './modules/dashboard/add-user/add-user.component';
import { AboutComponent } from './AboutUs/about/about.component';
import { DetailComponent } from './HouseDetail/detail/detail.component';
import { CardComponent } from './Payment/card/card.component';
import { AddCommentComponent } from './modules/dashboard/add-comment/add-comment.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home page
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginpageComponent }, // Add this line for the login page
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'Kirala', component: HousesComponent },
  { path: 'Iletisim', component: ContactComponent },
  { path: 'sidebar', component: SidebarComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'adverts', component: AdvertsComponent},
  { path: 'support', component: SupportComponent},
  {path: 'profileinfo', component: ProfileInfoComponent},
  { path: 'addUser', component: AddUserComponent },
  { path: 'About', component: AboutComponent },
  { path: 'EvDetay', component: DetailComponent },
  { path: 'Ödeme', component: CardComponent },
  { path: 'Comment', component: AddCommentComponent},
  { path: 'EvDetay/:id', component: DetailComponent }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
