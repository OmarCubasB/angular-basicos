import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <p>{{ title }}</p>
    <h3>La base es: <strong> {{base}} </strong></h3>

    <button (click)="acumular(+base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">-{{ base }}</button>
    `
})
export class ContadorComponent {

    title: string = 'Contador App'
    numero: number = 18;
    base: number = 5;
  
    acumular( valor ) {
      this.numero += valor
    }

}