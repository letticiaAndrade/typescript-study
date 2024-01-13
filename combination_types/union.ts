/* Tipos de União no TypeScript permitem que você especifique vários tipos possíveis para uma única 
variável ou parâmetro. Um tipo de união é escrito como uma barra vertical | lista separada de tipos. */

function testeUniao(x:string | number) {
    console.log(x)
}

testeUniao(1) // saída: 1 
testeUniao("deu bom!") // saída: "deu bom!"
testeUniao(true) // ERRO, a função só aceita string e number como parâmetros 

// ERRADO
function senha(x: string | number) {
    console.log(x.toUpperCase()) // precisa ser uma função que exista para todos os tipos, nesse caso string e number 
}

// CORRETO
function senha2(x: string | number) {
    console.log(x) 
}

senha2("minhaSenha") // saída: "minhaSenha"