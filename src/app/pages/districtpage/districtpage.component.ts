import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-districtpage',
  templateUrl: './districtpage.component.html',
  styleUrls: ['./districtpage.component.css']
})
export class DistrictpageComponent {
 
 constructor(private obj :HeroService, private router:Router){}
 districts=this.obj.getData()
 gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
 }
}