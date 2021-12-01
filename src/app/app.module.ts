import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarRegisteredComponent } from './Components/navbar-registered/navbar-registered.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StarshipsListComponent } from './Views/starships/starships-list/starships-list.component';
//import { StarshipDetailComponent } from './Views/starships/starship-detail/starship-detail.component';
import { HomepageComponent } from './Views/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
//import { LoginComponent } from './Services/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarRegisteredComponent,
    NavbarComponent,
    StarshipsListComponent,
    //StarshipDetailComponent,
    HomepageComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
