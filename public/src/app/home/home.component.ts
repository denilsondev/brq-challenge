import { Component, OnInit } from '@angular/core';
import { SaqueService } from '../services/saque.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  error = false;
  title = 'Caixa Eletronico da BRQ';
  public notas: any[];

  constructor(private saqueService: SaqueService) { }

  sacar(valor) {
    this.saqueService.efetuarSaque(valor)
      .subscribe(data => {
        this.error = false;
        this.notas = data;
      },
      error => {
        this.error = true;
      });

  }

}
