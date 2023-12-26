/* O TypeScript permite que você digite especificamente um objeto 
usando uma interface que pode ser reutilizada por vários objetos. */
interface Cachorro{
    nome: string,
    sexo: string,
    idade?: number, // O ? para indicar que é opcional esse atributo no objeto, pode ser numero caso tenha ou undefined caso nao tenha e considere trata-tó pelo amor de deus
    // idade: number | undefined, ISSO AQUI NAO FUNCIONA TÁ!!! O atributo ainda é obrigatorio 
    cor: string,
    deficiente: boolean
}

function latir(c: Cachorro) {
    if (c.deficiente == false) {
        return console.log("Au, au!")
    } else {
        return;
    }
}

/* CORRETO */
const cachorro1: Cachorro = {deficiente: false, cor: "preto",idade: 2, nome: "Pig", sexo: "Femea" }
const cachorro2: Cachorro = {deficiente: true, cor: "branco", nome: "Bug", sexo: "Macho" } // atributo idade é opcional!

/* ERRADO */
const cachorro3: Cachorro = {deficiente: false, idade: 2, nome: "Pig", sexo: "Femea" } // atributo COR faltando!
const cachorro4: Cachorro = {deficiente: true, cor: "branco", nome: "Bug"} // atributo SEXO faltando!

/* TESTE DA FUNCAO */
latir(cachorro1) // nao faz nada porque retorna void
latir(cachorro2) // aparece o "Au, au!" no console


