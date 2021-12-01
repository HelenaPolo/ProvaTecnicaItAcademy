import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './starships-list/starships-list.component';
//import { StarshipDetailComponent } from './starship-detail/starship-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    StarshipsListComponent,
    //StarshipDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class StarshipsModule { }
