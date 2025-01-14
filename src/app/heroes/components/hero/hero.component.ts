import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    public name: string = "ironman";
    public age: number = 45;

    get capitalizedName():string {
      return this.name.toUpperCase();
    }

    getHeroDesc():string {
      return `${this.name} - ${this.age}`
    }

    changeHero():void {
      this.name = 'SpiderMan'
    }
    changeAge():void {
      this.age = 17;
    }
    reset():void{
      this.name = 'IronMan'
      this.age = 45
    }

}
