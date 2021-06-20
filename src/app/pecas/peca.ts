export class Peca {
    private cod: string
    private descricao: string
    private quantidadeDisponivel: number
    private quantidadeMinima: number
    private capacidadeMaxima: number
    private preco: number
    private loja: string

    constructor(
        cod: string,
        descricao: string,
        quantidadeDisponivel: number,
        quantidadeMinima: number,
        capacidadeMaxima: number,
        preco: number,
        loja: string
    ) {
        this.cod = cod
        this.descricao = descricao
        this.quantidadeDisponivel = quantidadeDisponivel
        this.quantidadeMinima = quantidadeMinima
        this.capacidadeMaxima = capacidadeMaxima
        this.preco = preco
        this.loja = loja

    }

    public get getCod(): string {
        return this.cod
    }

    public get getDescricao(): string {
        return this.descricao
    }

    public get getQuantidadeDisponivel(): number {
        return this.quantidadeDisponivel
    }

    public get getQuantidadeMinima(): number {
        return this.quantidadeMinima
    }

    public get getCapacidadeMaxima(): number {
        return this.capacidadeMaxima
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getLoja(): string {
        return this.loja
    }

    public set setQuantidade(quantidade: number) {
        this.quantidadeDisponivel += quantidade;
    }
}