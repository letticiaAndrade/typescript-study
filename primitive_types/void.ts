/* void representa o valor de retorno de funções que retornam um valor. É o tipo inferido sempre que uma função não tiver nenhuma return declarações, 
ou não retorna qualquer valor explícito dessas declarações de retorno: */

function nadinhaAqui() {
    return;
}

/* Em JavaScript, uma função que não retorna nenhum valor retornará implicitamente o valor undefined.
 No entanto, void e undefined não são a mesma coisa em TypeScript */