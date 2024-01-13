/* as const é uma asserção de tipo no TypeScript que permite afirmar que uma expressão tem um tipo 
específico e que seu valor deve ser tratado como um valor somente leitura. */


const diaSemana = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira'] as const;
    // readonly, esses valores viram padroes

// O 'const' assertion só pode ser aplicado em
// string, number, boolean, array, ou objeto literal.
// ERRADO!
let a = (Math.random() < 0.5 ? 0 : 1) as const;
let b = (60 * 60 * 1000) as const;

// CORRETO!
let c = Math.random() < 0.5 ? (0 as const) : (1 as const);
let d = 3_600_000 as const;