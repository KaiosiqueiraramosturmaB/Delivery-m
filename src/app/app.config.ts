import { ApplicationConfig, mergeApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'; // Certifique-se de que este módulo está exportado corretamente
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent, // Mantenha AppComponent aqui se ele for standalone
    // Não inclua aqui TelaInicialComponent e AceitarEntregaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class appmodule{}
export const appConfig: ApplicationConfig = {
  providers: []
};