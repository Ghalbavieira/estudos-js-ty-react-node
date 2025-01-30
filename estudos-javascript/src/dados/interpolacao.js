const nome = 'jao'
const idade = 35;
const cidade = 'Goiania';

const frase = 'Olá! meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade;

// modelo para interpolacao
const newFrase = `Olá! meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade};`

console.log(frase)
console.log(newFrase)