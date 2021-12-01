import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarshipsService } from 'src/app/Services/starships.service';
import { Starships } from 'src/app/Models/starships';



@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starship: Starships[] | undefined
  
  data!: string;
  starships: any[] = [];

  name!: string;
  description!: string;
  id!: number;
  url!: string;
  starshipId!: number;


  selectedStarship: Starships | undefined;
  onSelect(starship: Starships): void{
    this.selectedStarship = starship;
  }

  constructor( private starshipsService: StarshipsService, private router: Router) {}

  ngOnInit(): void {
    this.starshipsService.getAllStarships().subscribe((data: any) => {
      this.starships = data.results;
      console.log(data.results);
      console.log((data.results).length);
      console.log(data.results.url);
    })
  }

  Search(){
    if(this.description !=""){
      this.starship = this.starships.filter(res =>{
        return res.description.toLocaleLowerCase().match(this.description.toLocaleLowerCase());
      });
    }else if(this.description == ""){
      this.ngOnInit();
    }

  }

  goStarshipDeatail(i: number){
    this.url = this.starships[i].url;
    this.starshipId = this.starships[i].url.substr(-2, 1);
    console.log(this.starshipId);
    let nameSplitted = (this.starships[i].name).split(" ").join("-");
    
    //this.router.navigate(['/starship-detail', nameSplitted]);
    this.router.navigate(['/starship-detail', this.starshipId]);


  }
}
