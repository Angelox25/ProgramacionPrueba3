import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneraQrPage } from './genera-qr.page';

describe('GeneraQrPage', () => {
  let component: GeneraQrPage;
  let fixture: ComponentFixture<GeneraQrPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // En lugar de "declarations", se debe importar el componente standalone
      imports: [IonicModule.forRoot(), FormsModule, GeneraQrPage],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('P7: Creación exitosa del componente', () => {
    expect(component).toBeTruthy();
  });

  it('P8: Valor inicial de qrData del "Texto de base"', () => {
    expect(component.qrData).toBe('Texto de base');
  });

  it('P9: Generación del código QR al pulsar un botón', () => {
        // Propósito: Comprobar que generateQRCode asigna qrData a createdCode
        component.qrData = 'Prueba QR';
        component.generateQRCode();
        expect(component.createdCode).toBe('Prueba QR');
        // Resultado esperado: createdCode debe igualarse a qrData tras ejecutar el método  
  });

  it('P10: Verificar que el código QR no se muestra inicialmente', () => {
      // Propósito: Comprobar que el código QR no se renderiza antes de que el usuario lo genere.
      const compiled = fixture.nativeElement; // Obtiene el DOM renderizado
      expect(compiled.querySelector('qrcode')).toBeNull();
      // Resultado esperado: El elemento <qrcode> no debe estar presente en el DOM al inicio.
  });

  it('P11: Actualización de createdCode al llamar a generateQRCode()', () => {
        // Propósito: Verificar que generateQRCode actualiza createdCode correctamente con nuevos datos.
        component.qrData = 'Nuevo texto QR';
        component.generateQRCode();
        expect(component.createdCode).toBe('Nuevo texto QR');
        // Resultado esperado: createdCode debe coincidir con el nuevo valor de qrData
    

  });
});
