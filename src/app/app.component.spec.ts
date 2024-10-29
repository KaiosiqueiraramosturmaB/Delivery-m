import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

export const appConfig = {};

describe('AppComponent', () => {
  let fixture: any;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // Não precisa usar imports para components standalone
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the title 'Delivery-motoboy'`, () => {
    expect(app.title).toEqual('Delivery-motoboy'); // Verifique se a propriedade 'title' existe em AppComponent
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Delivery-motoboy'); // Verifique se o título está correto
  });
});
