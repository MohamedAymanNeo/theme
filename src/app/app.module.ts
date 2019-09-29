import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopbarComponent } from './components/mainnav/topbar/topbar.component';
import { NavbarComponent } from './components/mainnav/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { StatsComponent } from './components/stats/stats.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewComingComponent } from './components/new-coming/new-coming.component';
import { PricesComponent } from './components/prices/prices.component';
import { GallaryComponent } from './components/gallary/gallary.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    NavbarComponent,
    HeaderComponent,
    ServicesComponent,
    AboutComponent,
    TestimonialsComponent,
    StatsComponent,
    OurTeamComponent,
    FooterComponent,
    NewComingComponent,
    PricesComponent,
    GallaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
