import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DistrictpageComponent } from './pages/districtpage/districtpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DistrictpageComponent,
    ContactpageComponent,
    SignuppageComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
