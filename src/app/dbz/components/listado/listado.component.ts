import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-listado',
  standalone: false,
  
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  @Input()
  public listadoPersonajesPorDefecto: Personaje[] = [
    {
      nombre: 'goten',
      poder: 10
    },
    {
      nombre: 'trunks',
      poder: 10
    }
  ]

  onBorrarPersonaje(index:number):void {
    this.onBorrarID.emit(index)
  }

  onBorrarPersonajeByUUID(item:Personaje):void {
    this.onBorrarByUUID.emit(item.id)
  }

  @Output()
  public onBorrarID: EventEmitter<number> = new EventEmitter();

  @Output()
  public onBorrarByUUID: EventEmitter<string> = new EventEmitter();
}
