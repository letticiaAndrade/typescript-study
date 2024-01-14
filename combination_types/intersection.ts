/* Um tipo de interseção cria um novo tipo combinando vários tipos existentes. O novo tipo tem todas as características dos tipos existentes.
Para combinar tipos, se usa o operador &  
*/

// funciona como uma espécie de combinação/junção de um tipo com outro tipo
interface Pessoa {
    nome: string,
    idade: number,

}
interface Programador {
    nivel: string
}

type Tipointersecao = Pessoa & Programador;
type intersecaoTipo = Programador & Pessoa; // nao importa a ordem de tipo, poderei acessar as mesmas propriedades

let test : Tipointersecao = {idade: 21, nome: "Leticia", nivel: "FullStack Junior"}
let test2: intersecaoTipo = {idade: 21, nome: "Larissa", nivel: "FullStack Junior"}

/* 
- Um tipo de interseção combina dois ou mais tipos para criar um novo tipo que tenha todas as propriedades dos tipos existentes.
- A ordem de tipo não é importante quando você combina tipos.
*/