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
