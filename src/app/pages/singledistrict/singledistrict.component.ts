import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singledistrict',
  templateUrl: './singledistrict.component.html',
  styleUrls: ['./singledistrict.component.css']
})
export class SingledistrictComponent {
  single:any
  constructor(private hero:HeroService){}
  ngonInit():void{
    let id:any=localStorage.getItem('id')
    let singledistrictDataArray=this.hero.getData()
    console.log(singledistrictDataArray);
    this.single=singledistrictDataArray.filter(e=>e.title===id)
    console.log("title",this.single)
  }

}
