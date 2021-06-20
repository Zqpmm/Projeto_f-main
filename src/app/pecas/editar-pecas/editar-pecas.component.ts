import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Peca } from '../peca';
import { PecaService } from '../peca.service';

@Component({
  selector: 'app-editar-pecas',
  templateUrl: './editar-pecas.component.html',
  styleUrls: ['./editar-pecas.component.css']
})
export class EditarPecasComponent implements OnInit {

  cod: string = ''
  inscricao: Subscription | undefined
  peca: Peca | undefined

  quantidade: number = 0
  alert: number = 1

  constructor(
    private pecaService: PecaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cod = String(this.route.snapshot.paramMap.get('id'));
    this.pecaService.getPeca(String(this.cod)).subscribe(pecas => {
      this.peca = pecas
    }) 
        if (this.peca == null) {
          this.router.navigate(['']);
        }
      }
    
  }
  /*
 atualizarQuantidade(form : any) {
  
    this.peca.descricao = form.value.descricao
    this.peca.quantidadeDisponivel = form.value.quantidadeDisponivel
    this.peca.quantidadeMinima = form.value.quantidadeMinima
    this.peca.capacidadeMaxima = form.value.capacidadeMaxima
    this.peca.preco = form.value.preco
    this.peca.loja = form.value.loja

    this.pecaService.atualizaQuantidadePeca(String(this.cod), this.peca).subscribe(()=>{
      this.router.navigate(['/listar'])
    })


 }
 */