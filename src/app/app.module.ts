import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarRegisteredComponent } from './Components/navbar-registered/navbar-registered.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StarshipsListComponent } from './Views/starships/starships-list/starships-list.component';
import { HomepageComponent } from './Views/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Views/Start/register/register.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarRegisteredComponent,
    NavbarComponent,
    StarshipsListComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
