interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}

const produto1: Produto = {
    id: 43,
    nome: 'jao',
    descricao: 'string',
    preco: 2,
    imagem: 'string',
}

const produto2: Partial<Produto> = {
    
}