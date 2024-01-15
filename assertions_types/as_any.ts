/* any é um tipo especial no TypeScript que representa um valor de qualquer tipo. 
Quando um valor é declarado com o qualquer tipo, o compilador não irá executar qualquer tipo de 
verificações ou inferência de tipo sobre esse valor. */

// EXEMPLO 
let anyValue: any = 42; // number

// anyValue pode ser qualquer coisa.
anyValue = 'Qualquer valor aqui como string!'; // string
anyValue = true; // boolean