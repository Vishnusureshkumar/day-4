import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-districtpage',
  templateUrl: './districtpage.component.html',
  styleUrls: ['./districtpage.component.css']
})
export class DistrictpageComponent {
 constructor(private hero :HeroService){}
 districts=this.hero.getData()
}