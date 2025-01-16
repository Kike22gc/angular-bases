import { Personaje } from './../../interfaces/personaje.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregarpersonaje',
  standalone: false,
  
  templateUrl: './agregarpersonaje.component.html',
  styleUrl: './agregarpersonaje.component.css'
})
export class AgregarpersonajeComponent {

  @Output()
  public onAddnuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  anadirPersonaje():void {

    if(this.nuevoPersonaje.nombre.length === 0) return;
    
    this.onAddnuevoPersonaje.emit(this.nuevoPersonaje)

    this.nuevoPersonaje = {nombre:'', poder:0}
  }

  
}
