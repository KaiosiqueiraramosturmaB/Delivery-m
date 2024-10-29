

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component'; // ajuste conforme necessário
import { AceitarEntregaComponent } from './aceitar-entrega/aceitar-entrega.component'; // ajuste conforme necessário

const routes: Routes = [
  { path: '', component: TelaInicialComponent },
  { path: 'aceitar-entrega', component: AceitarEntregaComponent },
  // Adicione outras rotas conforme necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} // Certifique-se de que o módulo está exportado corretamente


