import { Component } from '@angular/core';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-tela-inicial></app-tela-inicial>`, // Usando o componente aqui
  imports: [TelaInicialComponent] // Importando o componente standalone
})
export class AppComponent {
  title = 'Delivery-motoboy'; 
}
