/* No TypeScript, uma classe é um blueprint para criar objetos com propriedades e métodos específicos. */

/* Se a opcao strictPropertyInitialization = true, entao todas as propriedades de instância de uma classe devem ser 
inicializadas no construtor da classe ou ter um valor atribuído a elas antes de serem usadas. */

class Cachorro {
    nome: string
    sexo: string;

    constructor(nome: string, sexo: string) {
        this.nome = nome;
        this.sexo = sexo;
    };

    latir() {
        console.log(`Doguinho se chama ${this.nome} e é ${this.sexo}`)
    }
}

/* ERRADO */
// vai dar erro por falta de inicializacao se o strictPropertyInitialization estiver true
class Gato {
    nome: string
    sexo: string; 
}

/* CORRETO */
class Gato2 {
    nome: string
    sexo!: string; // o uso do !, evita dar erro por falta da inicializacao
}

/* CORRETO */
class Gato3 {
    nome: string = "macho"
    sexo: string = "macho"; 
}

/* CORRETO */
class Gato4 {
    nome: string;
    sexo: string ; 

    constructor(nome: string, sexo: string){
        this.nome = nome;
        this.sexo = sexo;
    }
}

const cachorro1 = new Cachorro("Bob", "Macho")
cachorro1.latir() // saida: "Doguinho se chama Bob e é Macho" 