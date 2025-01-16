import { DBZService } from '../services/dbz.service';
import { Personaje } from './../interfaces/personaje.interface';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './mainpage.component.html',
    standalone: false,
})

export class DBZMainPageComponent {

    constructor( private dbzService: DBZService) {}    
        
    get personajes(): Personaje[] {
        return [...this.dbzService.listadoPersonajes]
    }

    onDeletePersonaje( id:string ):void {
        this.dbzService.onBorrarByUUID(id)
    }

    onNuevoPersonaje ( personaje: Personaje) {
        this.dbzService.onAddNuevoPersonaje(personaje)
    }
    
        
}