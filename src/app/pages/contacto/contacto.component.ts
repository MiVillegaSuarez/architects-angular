import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavegationComponent } from '../../components/navegation/navegation.component';
import { HttpClientModule } from '@angular/common/http';
import { TextsService } from '../../services/texts/texts.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    NavegationComponent,
    HttpClientModule
  ],
  providers: [TextsService],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit {
  texts:any;
  constructor(
   private textsService: TextsService
  ) {
    this.textsService.getTexts().subscribe(info => this.texts = info)
  }

  ngOnInit(): void {

  }
}
