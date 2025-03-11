
console.log(result)



try{                     // tenta executar algo
    console.log(result)
}catch (error){                 // captura o erro para tratar
    console.log(Error)
}finally {
    console.log('fim')
}

// pode ou não precisar usar o finally, se estiver usando banco de dados no try vc abre a conexao, no catch vc trata o erro e no finally vc finaliza