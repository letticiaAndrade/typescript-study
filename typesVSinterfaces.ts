/* Os tipos são preferíveis para valores primitivos, tipos de união/intersecção, funções e tuplas, 
enquanto as interfaces oferecem melhores mensagens de erro e desempenho na verificação de tipos. */

// interfaces estipulam a sintaxe para classes, propriedades, métodos e eventos.
// os tipos são utilizados para delinear tipos de dados para variáveis

// As interfaces no TypeScript são um contrato que estipula os requisitos que um objeto deve atender.
// Elas definem a sintaxe que deve ser seguida por cada entidade.

type TipoPassaro = {
  asas: 2;
};

interface InterfacePassaro {
    asas: 2;
  }

const passaro1 : TipoPassaro = {asas: 2};
const passaro2: InterfacePassaro = {asas: 2};

// Porque o Typescript é um sistema de tipagem estrutural
// é possível misturar o seu uso também.
const passaro3: InterfacePassaro = passaro1; 

// Ambos suportam a extensão de outras interfaces e tipos.
// Os tipos fazem isso através da interseção de tipos,
// enquanto interfaces possuem uma palavra-chave (extends).

/* tipo interseção de um tipo */
type Coruja = { noturno: true } & TipoPassaro;
/* tipo interseção com interface */
type Robin = { noturno: false } & InterfacePassaro;

/* interface estendendo de um tipo */
interface Pavao extends TipoPassaro {
  colorido: true;
  voa: false;
}
/* interface estendendo de uma interface */
interface Galinha extends InterfacePassaro {
  colorido: false;
  voa: false;
}

let coruja: Coruja = { asas: 2, noturno: true };
let galinha: Galinha = { asas: 2, colorido: false, voa: false };

// Uma das maiores diferenças entre tipos e interfaces é que
// interfaces são abertas e tipos são fechados.
// Isso signifca que você pode extender interfaces declarando
// uma segunda vez.

/* INTERFACE DECLARADA MAIS DE UMA VEZ - PODE */
interface Gato {
  ronrona: boolean;
}

interface Gato {
  cor: string;
}

/* TYPE DECLARADO MAIS DE UMA VEZ - NAO PODE!!! */
type Filhote = {
  cor: string;
};

type Filhote = {
  brinquedos: number;
};

/* OUTROS TIPOS */
// primitive
type Nome = string;

// object
type PontoX = { x: number; };
type PontoY = { y: number; };

// union
type Pontos = PontoX | PontoY;

// tuple
type Data = [number, string];