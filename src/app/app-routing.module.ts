import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Views/homepage/homepage.component';
import { StarshipsListComponent } from './Views/starships/starships-list/starships-list.component';
import { LoginComponent } from './Views/Start/login/login.component';
import { RegisterComponent } from './Views/Start/register/register.component';

const routes: Routes = [
  { path: 'starships', component: StarshipsListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
