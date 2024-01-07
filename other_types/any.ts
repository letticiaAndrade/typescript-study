/* TypeScript tem um tipo especial, any, que você pode usar sempre que
 quiser que um valor específico cause erros de verificação de tipo. */

/* Quando um valor é do tipo any, você pode acessar qualquer propriedade dele (que por sua vez será do tipo any),
chame-o como uma função, atribua-o a (ou de) um valor de qualquer tipo, 
ou praticamente qualquer outra coisa que seja sintaticamente legal: */

let qualquerCoisa : any = "oi"
qualquerCoisa = 4 
console.log(qualquerCoisa) // saída: 4 

let qualquerCoisa2: any = 2
qualquerCoisa2 = "hahahaha"

let qualquerCoisa3: any = true
qualquerCoisa3 = {x: new Date()}

let qualquerCoisa4: any = {
    x: 2
}

/* noImplicitAny
Quando você especifica um tipo, e TypeScript pode inferi-lo a partir do contexto, 
o compilador normalmente irá padrão para any.

Você geralmente quer evitar isso, porque any isnroit tipo verificado. 
Use o sinalizador do compilador noImplicitAny para sinalizar qualquer implícito any como um erro. */
