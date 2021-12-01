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

  description!: string;
  starshipId!: number;

  id!: number;
  name!: string;
  model!: string;
  url!: string;
  starshipDetails: any = [];
  MGLT!: string;
  cargo_capacity!: string;
  consumables!: string;
  cost_in_credits!: string;
  created!: string;
  crew!: string;
  edited!: string;
  length!: string;
  manufacturer!: string;
  max_atmosphering_speed!: string;
  passengers!: string;
  films: any = [];
  pilots!: string;
  starship_class!: string;

  selectedStarship: Starships | undefined;
  onSelect(starship: Starships): void{
    this.selectedStarship = starship;
  }

  constructor(
    private starshipsService: StarshipsService, 
    private router: Router,     
    ) {}

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
    
      document.getElementById("starshipDetail")!.style.display = "block";
      document.getElementById("starshipDetail")!.classList.add("show")
  
      this.starshipsService.getStarshipById(this.url).subscribe(
        (data: any) => {
          if (!data) {
            this.router.navigateByUrl('starships'); // redirect to starships-list
          } else {
            this.id = this.id; //Guardamos el ID para poder usarlo en todo el componente
            this.name = data.name;
            this.model = data.model;
            this.MGLT = data.MGLT;
            this.cargo_capacity = data.cargo_capacity;
            this.consumables = data.consumables;
            this.cost_in_credits = data.cost_in_credits;
            this.created = data.created;
            this.crew = data.crew;
            this.edited = data.edited;
            this.length = data.length;
            this.manufacturer = data.manufacturer;
            this.max_atmosphering_speed = data.max_atmosphering_speed;
            this.passengers = data.passengers;
            this.starship_class = data.starship_class

      
  
          }
        })
    
    
    //this.router.navigate(['/starship-detail', nameSplitted]);
    //this.router.navigate(['/starship-detail', this.starshipId]);


  }
  closeModal(){
    document.getElementById("starshipDetail")!.style.display = "none";
    document.getElementById("starshipDetail")!.classList.remove("show");
  }
}
