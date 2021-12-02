import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StarshipsListComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class StarshipsModule { }
