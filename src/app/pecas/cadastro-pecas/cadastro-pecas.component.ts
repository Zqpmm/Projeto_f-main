import { Router } from '@angular/router';
import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-cadastro-pecas',
  templateUrl: './cadastro-pecas.component.html',
  styleUrls: ['./cadastro-pecas.component.css']
})
export class CadastroPecasComponent implements OnInit {
  constructor(
    private pecaService: PecaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    let cod: string = ''
    let descricao: string = ''
    let quantidadeDisponivel: number = 0
    let capacidadeMaxima: number = 0
    let quantidadeMinima: number = 0
    let preco: number = 0
    let loja: string = ''

    cod = form.value.cod
    descricao = form.value.descricao
    preco = Number(form.value.preco)
    loja = form.value.loja
    quantidadeDisponivel = Number(form.value.quantidadeDisponivel)
    capacidadeMaxima = Number(form.value.quantidadeMaxima)
    quantidadeMinima = Number(form.value.quantidadeMinima)

    this.pecaService.addPeca(cod, descricao, preco, quantidadeDisponivel, quantidadeMinima, capacidadeMaxima, loja)
    this.router.navigate(['/listar'])
  }

}
