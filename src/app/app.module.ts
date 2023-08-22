import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { CardsComponent } from './cards/cards.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginpageComponent } from './modules/auth/loginpage/loginpage.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './modules/profile/profile.component';
import { HousesComponent } from './houses/houses.component';
import { HousesMainComponent } from './houses-main/houses-main.component';
import { HouseHeroComponent } from './house-hero/house-hero.component';
import { ContactComponent } from './Contacts/contact/contact.component';
import { ContactHeroComponent } from './Contacts/contact-hero/contact-hero.component';
import { ContactMainComponent } from './Contacts/contact-main/contact-main.component';
import { AdvertsComponent } from './modules/dashboard/adverts/adverts.component';
import { PaymentComponent } from './modules/dashboard/payment/payment.component';
import { SupportComponent } from './modules/dashboard/support/support.component';
import { SidebarComponent } from './modules/dashboard/sidebar/sidebar.component';
import { ProfileInfoComponent } from './modules/dashboard/profile-info/profile-info.component';
import { AddUserComponent } from './modules/dashboard/add-user/add-user.component';
import { AllUserComponent } from './modules/dashboard/all-user/all-user.component';
import { DialogModule } from 'primeng/dialog';
import { AboutComponent } from './AboutUs/about/about.component';
import { AboutHeroComponent } from './AboutUs/about-hero/about-hero.component';
import { AboutMainComponent } from './AboutUs/about-main/about-main.component';
import { DetailComponent } from './HouseDetail/detail/detail.component';
import { DetailMainComponent } from './HouseDetail/detail-main/detail-main.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './Payment/card/card.component';
import { CardMainComponent } from './Payment/card-main/card-main.component';
import { AllHouseComponent } from './modules/dashboard/all-house/all-house.component';
import { ToastModule } from 'primeng/toast';
import { HomeCommentComponent } from './home-comment/home-comment.component';
import { JwtInterceptor } from '../core/services/interceptor/jwt.interceptor';
import { FilterPipe } from 'src/app/modules/dashboard/all-user/filter.pipe';
import { DatePipe } from '@angular/common';
import { AddCommentComponent } from './modules/dashboard/add-comment/add-comment.component';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    CardsComponent,
    MainpageComponent,
    LoginpageComponent,
    SignupComponent,
    ProfileComponent,
    HousesComponent,
    HousesMainComponent,
    HouseHeroComponent,
    ContactComponent,
    ContactHeroComponent,
    ContactMainComponent,
    AdvertsComponent,
    PaymentComponent,
    SupportComponent,
    SidebarComponent,
    ProfileInfoComponent,
    AddUserComponent,
    AllUserComponent,
    AboutComponent,
    AboutHeroComponent,
    AboutMainComponent,
    DetailComponent,
    DetailMainComponent,
    CardComponent,
    CardMainComponent,
    AllHouseComponent,
    HomeCommentComponent,
    FilterPipe,
    AddCommentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    TableModule,
    ToolbarModule,
    ConfirmDialogModule,
    ButtonModule,
    ToastModule,
    DatePipe,
    ReactiveFormsModule,
    MenuModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
