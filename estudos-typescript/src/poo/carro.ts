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

    acelerar(): Number {
        const novaVelocidade = this.velocidadeAtual + this.velocidadeMaxima;
        this.velocidadeAtual = novaVelocidade <= this.velocidadeMaxima ? novaVelocidade : this.velocidadeMaxima;
        return this.velocidadeAtual;
    }

    frear(): number {
        const novaVelocidade = this.velocidadeAtual - this.frenagem;
        this.velocidadeAtual = novaVelocidade >= 0 ? novaVelocidade : 0;
        return this.velocidadeAtual;
    }
    
}


class Civic extends Carro {
    constructor(){
        super(230, 10, 5);
    }
}

const meuCarro: Carro = new Civic();32
meuCarro.acelerar();
meuCarro.frear();
meuCarro.velocidade;
