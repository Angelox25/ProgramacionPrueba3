import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiHtmlPage } from './api-html.page';
import { ServiceApiService } from '../service-api.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ApiHtmlPage', () => {
  let component: ApiHtmlPage;
  let fixture: ComponentFixture<ApiHtmlPage>;
  let apiService: ServiceApiService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule, // Proveedor para HttpClient
        ApiHtmlPage // Importa el componente standalone
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ApiHtmlPage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ServiceApiService); // Inyecta el servicio
    httpMock = TestBed.inject(HttpTestingController); // Inyecta el mock para HTTP
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no queden solicitudes pendientes
  });

  it('P5 - Verificar la creación del componente', () => {
     expect(component).toBeTruthy(); // Verifica que el componente no sea nulo o indefinido

  });

  it('should load data successfully in ngOnInit', () => {
    // Datos simulados para la respuesta del endpoint
    const mockResponse = {
      info: { count: 20 }, // Número total de personajes
      results: [
        { name: 'Rick Sanchez', status: 'Alive', image: 'url-to-image-1' },
        { name: 'Morty Smith', status: 'Alive', image: 'url-to-image-2' }
      ]
    };
  
    // Ejecutar ngOnInit para disparar la carga de datos
    component.ngOnInit();
  
    // Simular la solicitud HTTP interceptando el request con HttpTestingController
    const req = httpMock.expectOne('https://rickandmortyapi.com/api/character');
  
    // Asegurarse de que el método sea GET
    expect(req.request.method).toBe('GET');
  
    // Simular la respuesta con los datos de prueba
    req.flush(mockResponse);
  
    // Verificar que las propiedades del componente se actualizaron correctamente
    expect(component.cantidad_personajes).toBe(mockResponse.info.count);
    expect(component.personajes).toEqual(mockResponse.results);
  });
  
  


});
