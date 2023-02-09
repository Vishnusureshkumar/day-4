import { Injectable } from '@angular/core';
import { districts } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getData(){
    return districts
  }
}
