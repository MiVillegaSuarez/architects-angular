import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';
import { HttpClientModule } from '@angular/common/http';
import { TextsService } from '../../services/texts/texts.service';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavegationComponent,
    ContactFormComponent,
    HttpClientModule
  ],
  providers: [TextsService],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit {
  
  texts:any;
  constructor(
   private textsService: TextsService
  ) {
    this.textsService.getTexts().subscribe(info => this.texts = info)
  }

  ngOnInit(): void {

  }
}
