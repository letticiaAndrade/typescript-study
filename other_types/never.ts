/* O tipo never representa o tipo de valores que nunca ocorrem. 
Por exemplo, never é o tipo de retorno para uma expressão de função ou uma expressão de 
função de seta que sempre lança uma exceção ou uma que nunca retorna. As variáveis também adquirem 
o tipo nunca quando estreitadas por qualquer tipo de proteção que nunca pode ser true.
 */

// usado para algum erro
function throwError(mensagem: string): never {
    throw new Error(mensagem);
}

// Exemplo de uso:
function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        return throwError("Não é possível dividir por zero.");
    }
    return a / b;
}

/* Nós podemos utilizar o type never em funções sem retorno: */
function carregandoGame(): never {
    while (true) {
      console.log("Carregando todos processos de um game!");
    }
  }

/* qual é a diferença entre void e never? */
// never representa a impossibilidade de se haver um valor, já o void pode retornar undefined
