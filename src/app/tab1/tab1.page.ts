import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private peso: number;
  private altura: number;
  private imc: number;

  constructor() {}

  calcularIMC(){
    this.imc = this.peso / (this.altura*this.altura);
  }

  exibeIMC(): string{
    if(this.imc < 17){
      return (this.imc).toString() + ": Muito abaixo do peso!";
    }
    else if((this.imc >= 17) && (this.imc <= 18.49)){
      return (this.imc).toString() + ": Abaixo do peso!";
    }
    else if((this.imc >= 18.5) && (this.imc <= 24.99)){
      return (this.imc).toString() + ": Peso normal!";
    }
    else if((this.imc >= 25) && (this.imc <= 29.99)){
      return (this.imc).toString() + ": Acima do peso!";
    }
    else if((this.imc >= 30) && (this.imc <= 34.99)){
      return (this.imc).toString() + ": Obesidade I!";
    }
    else if((this.imc >= 35) && (this.imc <= 39.99)){
      return (this.imc).toString() + ": Obesidade II (Severa)!";
    }
    else if((this.imc >= 40)){
      return (this.imc).toString() + ": Obesidade III (Mórbida)!";
    }
  }

}
