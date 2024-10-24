import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iroman'
  public age: number = 30


  get capitalizedName (): string{
    return this.name.toUpperCase();
  }

  getHeroDescription ():string {
    return `${this.name} - ${this.age}`;

  }

  changeHero():void{
    this.name = 'martosman';
  }

  changeAge():void{
    this.age = 18;
  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
  }



}
