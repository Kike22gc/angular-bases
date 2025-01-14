import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{title}} </h1>
    <hr>
    <h3> {{contador}} </h3>

    <button (click)="incrementar()" > Incrementar 1 </button>
    <button (click)="restar()" > Restar 1 </button>

    <button (click)="restarVarios(3)" > Restar 3 </button>
    <div>
    <button (click)="reset()" > Reset a 0 </button>
    </div>

    <hr>
    `,
    standalone: false,
  })

export class CounterComponent {
    public title: string = 'Mi primer componente en angular';
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