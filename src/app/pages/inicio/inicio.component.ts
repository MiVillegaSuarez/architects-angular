import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BotonesNavegacionComponent } from '../../components/botones-navegacion/botones-navegacion.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent,
    BotonesNavegacionComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
