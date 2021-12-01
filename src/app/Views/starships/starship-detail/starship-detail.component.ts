import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Starships } from 'src/app/Models/starships';
import { StarshipsService } from 'src/app/Services/starships.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  @Input() starship: Starships | undefined;

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
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private starshipsService: StarshipsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadStarship(params['id']);
    });
  }
  loadStarship(id: number) {
    this.starshipsService.getStarshipById(id).subscribe(
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
    

        }
      })
    }
  }

     

