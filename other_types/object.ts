/* Definir um tipo object, nós simplesmente listamos suas propriedades e seus tipos. */

let geladeira: {litros: number, marca: string}; // variavel do tipo objeto
geladeira = {litros: 500, marca: "Consul"}; // o objeto geladeira recebendo os valores das suas propriedades

let computador: {memoriaRam: number, hd: number, placaMae: string} = {hd:1, memoriaRam:2, placaMae: "Asus"} // uma variavel do tipo objeto 

console.log(computador)// { "hd": 1, "memoriaRam": 2, "placaMae": "Asus"} 

function podeEntrar(pessoa: {nome: string, idade: number}){
    if(pessoa.idade >= 18){
        console.log("Chega mais!!")
    } else {
        console.log("Lo siento!")
    }
}
podeEntrar({idade: 21, nome: "Leticia"}) // saída: "Chega mais!!"
