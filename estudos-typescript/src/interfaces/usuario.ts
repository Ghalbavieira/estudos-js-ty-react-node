interface Usuario {
   id: number;
   nome: string;
   email: string;
   senha?: string; 
   ativo: boolean;
}

let usuario: Usuario = {
    id: 1234,
    nome: 'jao',
    email: 'oi@mail.com',
    ativo: true,
}

console.log(usuario);