import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';

  constructor() {
    this.operandoA = '';
    this.resultado = '';
    this.operandoB = '';
  }
  
  operandoA:string;
  operandoB:string;
  resultado:string;

  onSumar():void {
    this.resultado = this.operandoA + '' + this.operandoB;
  }
}
