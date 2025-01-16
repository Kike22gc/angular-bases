import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DBZMainPageComponent } from './pages/mainpage.component';

import { ListadoComponent } from './components/listado/listado.component';
import { AgregarpersonajeComponent } from './components/agregarpersonaje/agregarpersonaje.component';




@NgModule({
  declarations: [
    DBZMainPageComponent,
    ListadoComponent,
    AgregarpersonajeComponent
  ],

  exports: [
    DBZMainPageComponent,
    ListadoComponent,
    AgregarpersonajeComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
