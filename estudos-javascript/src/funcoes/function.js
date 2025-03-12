/*
    Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função
    Argumentos: é o valor que é passado para a função

    parametro é o que a função recebe e o argumento é o valor que passamos;
*/


function message(username){  //username é o parametro
    console.log('Olá ', username)
}

message('Ana'); // Ana é o argumento;


function joinText(text1, text2, text3, text4 = ''){ //text4 está definindo um valor padrão para o (argumento)
    console.log(text1, text2, text3)
}

joinText("Ghalba", "E", "isa")




function Sum(a, b){
    let result = a + b

    return result
}

let resultado = Sum(9, 8);
console.log(resultado)

// ou 

console.log(Sum(4, 6))

/////////////////

showMessage("olá")

function showMessage(message){
    console.log(message)
}

showMessage(" ola de novo")



function showMessage(message){
    console.log(message)
    endLine()

    function endLine(){    //função dentro do escopo e pode usar função dentro de função
        console.log(".....");
    }

    endLine
}

showMessage(" ola de novo")














