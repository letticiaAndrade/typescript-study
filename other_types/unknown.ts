/* Quando uma variável é declarada como “unknown”, é necessário realizar uma verificação de tipo ou 
uma atribuição de tipo antes de utilizá-la. Isso incentiva a escrita de código mais seguro e explícito. */

// Ao contrário do tipo “any”, o “unknown” exige uma maior garantia de segurança no uso de valores.

function verificacaoTipo(value: unknown) {
    if (typeof value === 'string') {
          console.log('O valor é uma string:', value.toUpperCase());
    } else if (typeof value === 'number') {
         console.log('O valor é um número:', value * 2);
    } else {
         console.log('O valor é desconhecido:', value);
    }
}

const data: unknown = 'Estou estudando Typescript em 2024!';
verificacaoTipo(data); // saída: O valor é uma string: ESTOU ESTUDANDO TYPESCRIPT EM 2024!

/* O “unknown” promove a segurança de tipo, exigindo verificações e atribuições explícitas antes do 
uso de valores desconhecidos, enquanto o “any” oferece maior flexibilidade, mas com menos
 garantias de tipo. */