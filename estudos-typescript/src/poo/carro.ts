export default abstract class Carro {
    constructor(
        private readonly velocidadeMaxima: number = 220,
        private readonly aceleracao = 5,
        private readonly frenagem = 5,
        protected velocidadeAtual: number = 0,
    ){}

    get velocidade(): number {
        return this.velocidadeAtual;
    }
}