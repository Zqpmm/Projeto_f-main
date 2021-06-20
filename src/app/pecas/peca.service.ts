import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Peca } from './peca';

@Injectable({
  providedIn: 'root'
})
export class PecaService {
  baseUrl = "http://localhost:3000/pecas"
 


  constructor(private http : HttpClient) {
  }



 public  getPecas() : Observable<Peca[]> {
    
    return this.http.get<Peca[]>(this.baseUrl)
    
  }

  public getPeca(cod: string) : Observable<Peca> {
    const url = '$(this.baseUrl)/$(id)'
    return this.http.get<Peca>(url)
    }
  
  



  public atualizaQuantidadePeca(cod: string, peca : Peca) : Observable<Peca>  {
    
    const url = '$(this.baseUrl)/$(id)'
    return this.http.put<Peca>(url,peca)

  }

  public addPeca(cod: string, 
    descricao: string,
    quantidadeDisponivel: number,
    quantidadeMinima: number,
    capacidadeMaxima: number,
    preco: number,
    loja: string) {

    let peca = new Peca(cod, descricao, quantidadeDisponivel, quantidadeMinima, capacidadeMaxima, preco, loja)
    return this.http.post<Peca>(this.baseUrl,peca)
  }

  private ordenar(arr: Peca[]) {
    arr.sort((a, b) => (
      a.getQuantidadeDisponivel / a.getQuantidadeMinima <
      b.getQuantidadeDisponivel / b.getQuantidadeMinima) ? -1 : 1);
  }


}
