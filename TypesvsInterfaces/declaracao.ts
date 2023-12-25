// Uma das maiores diferenças entre tipos e interfaces é que
// INTERFACES são abertas e TYPES são fechados.
// Isso signifca que você pode extender interfaces declarando
// uma segunda vez.

/* INTERFACE DECLARADA MAIS DE UMA VEZ - PODE */
// se considera como um só
interface Gato {
    ronrona: boolean;
  }
  
  interface Gato {
    cor: string;
  }
  
  const gatao : Gato = {ronrona: true, cor: "branquinho"}; // veja que se uniu
  const gatoDoente: Gato = {ronrona: false, cor: "preto"}; 
  
  /* TYPE DECLARADO MAIS DE UMA VEZ - NAO PODE!!! */
  // ERRADO
  type Filhote = {
    cor: string;
  };
  
  type Filhote = {
    brinquedos: number;
  };
  
  /* TYPE DECLARADO UMA VEZ VEZ */
  // CORRETO
  type FilhoteC = {
    cor: string,
    brinquedos: number;
  };
  
  const filhote1: FilhoteC = {cor: "marrom", brinquedos: 2}; 