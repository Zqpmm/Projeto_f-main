import { Component, OnInit } from '@angular/core';
import { Peca } from '../peca';

import { PecaService } from '../peca.service';


@Component({
  selector: 'app-listar-pecas',
  templateUrl: './listar-pecas.component.html',
  styleUrls: ['./listar-pecas.component.css']
})
export class ListarPecasComponent implements OnInit {
  imageSrc = './assets/logo20.png'
  imageAlt = 'a'
  pecas: Peca[] = [];
  

  constructor(private pecaService : PecaService){
    this.pecaService.getPecas().subscribe(pecas =>{this.pecas = pecas})
    }

  ngOnInit(): void {

  }

}
