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

/* DIFERENÇAS ANY X UNKNOWN
1.Verificações de tipo: O “unknown” requer verificações de tipo ou atribuições explícitas antes de utilizar seus valores, enquanto o “any” não exige essas verificações.
2.Segurança de tipo: O “unknown” oferece maior segurança de tipo, pois incentiva a escrita de código mais seguro e explícito, enquanto o “any” não impõe restrições e pode resultar em perda de tipo.
3.Inferência de tipo: O “unknown” não permite inferência automática de tipo, exigindo que o desenvolvedor forneça informações de tipo explicitamente, ao contrário do “any”, que permite a inferência automática de tipo.
4.Compatibilidade de tipo: O “unknown” é menos compatível com outros tipos do que o “any”, pois requer verificação de tipo explícita para a maioria das operações, enquanto o “any” é amplamente compatível com qualquer tipo. */
