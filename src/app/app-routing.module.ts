import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Views/homepage/homepage.component';
import { StarshipsListComponent } from './Views/starships/starships-list/starships-list.component';
//import { StarshipDetailComponent } from './Views/starships/starship-detail/starship-detail.component';

const routes: Routes = [
  { path: 'starships', component: StarshipsListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent },
  //{ path: 'starship-detail/:id', component: StarshipDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
