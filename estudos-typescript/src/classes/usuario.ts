class Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string; 
    ativo: boolean;

    constructor(
        id: number, 
        nome: string, 
        email: string, 
        ativo: boolean, 
        senha?: string 
    ) {
        this.id = id,
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
    }
}

const usuarioLogado: Usuario = new Usuario(2, 'jao',"mail.com", true, "ssdlkfjads",)
console.log(usuarioLogado);


// outro modelo

class Usuarios {
    constructor(
        readonly id: number, 
        readonly nome: string, 
        readonly email: string, 
        readonly ativo: boolean, 
        readonly senha?: string 
    ) {}
}

const usuarios: Usuario = new Usuario(2, 'jao',"mail.com", true, "ssdlkfjads",)
console.log(usuarios.ativo);