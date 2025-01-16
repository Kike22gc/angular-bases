import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DBZService {

    public listadoPersonajes: Personaje[] = [
        {
            id: uuid(),
            nombre: 'Goku',
            poder: 1000
        },
        {
            id: uuid(),
            nombre: 'Vegeta',
            poder: 900
        },
        {
            id: uuid(),
            nombre: 'Trunks',
            poder: 800
        },
    ];

    onAddNuevoPersonaje(personaje: Personaje):void {
        const nuevoPersonaje: Personaje = {
            id: uuid(),
            ...personaje
        }
        this.listadoPersonajes.push(nuevoPersonaje)
    }

    onBorrarID(index:number):void {
        this.listadoPersonajes.splice(index,1)
    }
    
    onBorrarByUUID(id:string):void {
        this.listadoPersonajes = this.listadoPersonajes.filter(personaje => personaje.id !== id)
    }
}