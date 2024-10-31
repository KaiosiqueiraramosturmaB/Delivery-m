import { Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component'; // ajuste conforme necessário
import { AceitarEntregaComponent } from './aceitar-entrega/aceitar-entrega.component'; // ajuste conforme necessário

export const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'aceitar-entrega', component: AceitarEntregaComponent },
  // Adicione outras rotas conforme necessário
];

 


