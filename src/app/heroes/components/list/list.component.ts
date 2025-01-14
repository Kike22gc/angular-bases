import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Viuda Negra'];

  public heroeBorrado?: string = '';

  public BorraUltimo():void {
    this.heroeBorrado = this.heroNames.pop(); 
    
     
  }

}
