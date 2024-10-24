import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';

  public titulo:string = 'Primer ejemplo de Angular';
  public contador:number = 25;


  modificar (valor:number):void{
    this.contador += valor;
  }

  resetearContador ():void{
    this.contador = 25;
  }
}
