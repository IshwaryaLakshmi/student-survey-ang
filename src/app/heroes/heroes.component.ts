import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { DataService } from '../data.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:any;
  constructor(private dataService: DataService) { }
  // heroes[] = null;
  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data)=>{
      console.log(data);
      this.heroes = data;
    });
  }
  // heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
