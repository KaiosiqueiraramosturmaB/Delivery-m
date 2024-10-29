import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config'; // Certifique-se de que o caminho está correto

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

// Combina a configuração da aplicação com a configuração do servidor
export const config = mergeApplicationConfig(appConfig, serverConfig);
