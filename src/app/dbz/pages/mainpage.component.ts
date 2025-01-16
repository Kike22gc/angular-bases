import { DBZService } from '../services/dbz.service';
import { Personaje } from './../interfaces/personaje.interface';
import { Component } from '@angular/core';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './mainpage.component.html',
    standalone: false,
})

export class DBZMainPageComponent {

    constructor( public dbzService: DBZService) {
        
    }
        
}