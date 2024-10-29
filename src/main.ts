import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';

platformBrowserDynamic().bootstrapModule(AppComponent, {
  ngZone: 'zone.js',
  providers: [{ provide: AppRoutingModule }]
})
.catch(err => console.error(err));
