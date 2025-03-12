/**
 * Callback Function: é uma função passada para outra função como um argumento.
 * 
 */

function execute(taskName, callback){
    console.log("executando a tarefa: ", taskName)

    callback()
}

function callback(){
    console.log("tarefa finalizada")
}
//passando para a função
execute("Download do arquivo...", callback) // tenho uma função passada como argumento para uma função e chamando a função dentro de outra





// criando a função no proprio parametro

execute("Upload do arquivo...", function(){
    console.log("função de callback com uma função anônima.")
})

// utilizando o Arrow Function

execute("Excluindo arquivo...", () => {
    console.log('Arquivo excluido!')
})


// encurtada

execute("salvando arquivo...", () => console.log('Arquivo excluido!'))
