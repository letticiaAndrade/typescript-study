/* Um tipo de tupla é outro tipo de Array que sabe exatamente quantos elementos ele contém 
e exatamente quais tipos ele contém em posições específicas. */

let tupla: [string, number] = ["oi", 19]

/* CORRETO */
console.log(tupla) // saída ["oi", 19]
//
/* ERRADO */
console.log(tupla[2]) // a variavel tupla só vai até o index 1
//

function testeTupla( tupla: [number, string, boolean]) {
    const a = tupla[0]
    const b = tupla[1]
    const c = tupla[2]
    console.log(a, b, c)

}

testeTupla([21, "oiaaa", true]) // saída [21, "oiaaa", true]

