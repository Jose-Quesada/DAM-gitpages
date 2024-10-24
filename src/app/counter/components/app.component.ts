import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `<h4> {{ contador }}</h4>
              <button (click)="modificar(1)">+1</button>
              <button (click)="resetearContador()">reset</button>
              <button (click)="modificar(-1)">-1</button>`,
})


export class CounterComponent{
  public contador:number = 25;


  modificar (valor:number):void{
    this.contador += valor;
  }

  resetearContador ():void{
    this.contador = 25;
  }

}
