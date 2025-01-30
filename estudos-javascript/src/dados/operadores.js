let dez = 10
let cinco = 5


console.log(dez + cinco); // soma
console.log(dez - cinco); // subtração
console.log(dez / cinco); // divisao
console.log(dez * cinco); // multiplicacao
console.log(dez % cinco); // módulo (resto da divisão) 
console.log(++dez); // acrescenta um numero tipo dez+1


// Operadores Relacionais

console.log(10 > 5); // maior
console.log(10 < 5); // menor
console.log(10 >= 5); // maior ou igual
console.log(10 <= 5); // menor ou igual
console.log(10 == 5); // sinal de igual
console.log(10 != 5); // diferente
console.log(10 == '5'); // igual
console.log(10 === "5"); // sinal de igual nos valores e no tipo
console.log(10 !== 5); // sinal de diferente extrita nos valores e no tipo



// OPERADORES LOGICOS

// AND 
// Retorna true apenas se ambos os operandos forem true.
const planejamentoConcluido = true;
const estaSol = true;

const temPicnic = planejamentoConcluido && estaSol; // && sinal de And (e)
console.log('Vamos fazer um picnic ' + temPicnic);


// OR
// Retorna true se pelo menos um dos operandos for true.
const estudei = false;
const liUmLivro = true;

const diaProdutivo = estudei || liUmLivro; // sinal de OR (ou) Se um for verdadeiro 


// NOT
// Negação do valor usando o !
// "negador lógico", ou seja, ele inverte o valor de uma expressão booleana.
const estouCansado = true
console.log('vou para a academia? ' + !estouCansado);


// XOR (OU exclusivo)
// O operador XOR (OU exclusivo) retorna true apenas se um dos valores for true, mas não ambos.

const usandoCalca = true
const usandoBermuda = false;

const vestidoCorretamente = usandoCalca !== usandoBermuda;
console.log('estou vestido corretamente? ' + vestidoCorretamente)