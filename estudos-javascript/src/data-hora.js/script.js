// Exibe a data e hora atual
console.log(new Date())

// Exibe a data e hora de referencia e considera o fuso
console.log(new Date(0))


// Definir uma data especifica (ano, mês e dia)e o mes começa no zero
console.log(new Date(2024, 7, 3))

// Definir ano, mes(0-11) e dia e hora, minuto e segundo
console.log(new Date(2024, 7, 3, 7 ,30,0))

// definindo data e hora com string
console.log(new Date('2024-07-03T07:30:00'))

console.log(new Date('July 3, 2024 14:30:00'))



/**
 * metodos para utilizar o new Date()
 */

let date = new Date('2024-07-03T07:30:00') 

console.log(date.getDay()); // dia da semana de 0 a 6 (domingo é 0)

console.log(date.getDate()); // dia do mês (0 a 30)

console.log(date.getMonth() + 1); // mês (0 a 11)

console.log(date.getFullYear());  // ano

console.log(date.getHours()); // somente a hora

console.log(date.getMinutes()); // minutos

console.log(date.getMilliseconds()); // segundos

//Modificar usar o metodo set
/// modificar o ano

date.setFullYear(2030)

// modificar o mes
date.setMonth(9)

// modificar o dia
date.setDate(19)
date.setTime('04:20')

// formata para o dia sempre ter dois digitos
let day = date.getDate().toString().padStart(1, '0')
let month = (date.getMonth() + 1).toString().padStart(1, '0')

let year = date.getFullYear()
let hour = date.getHours()
let minutes = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}: ${minutes}`)


// converter para string

let date1 = new Date('2024-07-03T07:30:00') 
console.log(date1.toString())

// converter somente a date para string
console.log(date1.toDateString())

// converter somente a hora para string
console.log(date1.toTimeString())

// Exibe a data e hora no formato escolhido
console.log(date1.toLocaleString())
console.log(date1.toLocaleDateString())
console.log(date1.toLocaleTimeString())

// e posso passar como argumento a sigla de onde quero o formato
console.log(date1.toLocaleDateString('en'))




//**
// Intl é a api de internacionalização do ECMAScript
//  */

// obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale);

// exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat('pt-br').format(new Date()))



