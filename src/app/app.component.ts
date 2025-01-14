import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'Mi primera pagina en angular';
  public contador: number = 0

  incrementar():void {
    this.contador++;
  }

  restar():void {
    this.contador--;
  }

  restarVarios(cantidad: number):void {
    this.contador -= cantidad;
  }

  reset():void {
    this.contador =0;
  }
}
