/* strictNullChecks=false, valores que podem ser null ou undefined ainda pode ser acessado normalmente,
 e os valores null e undefined pode ser atribuído a uma propriedade de qualquer tipo. SÓ SE QUISER BUG*/

/* com a opcao strictNullChecks=true, quando um valor é null ou undefined, 
você precisará testar esses valores antes de usar métodos ou propriedades nesse valor. 
Assim como verificar undefined antes de usar uma propriedade opcional, 
podemos usar o estreitamento para verificar se há valores que possam ser null */

/* UNDEFINED É DIFERENTE DE NULL */

function funcaoTeste(x: string | undefined) {
    if (x === undefined) { // se pode ser undefined, se nao for ele é o outro tipo que tu colocou ali!
      // faça nada
    } else {
      console.log('Paris, cidade na divisa de Bahia e Sergipe, ' + x.toUpperCase());
    }
  }

/* CORRETO */
let p: string | undefined;
p = "Kimetsu é muito bom, ASSISTA!!!"
p = undefined

 /* ERRADO */
let b: string;
b = "Kimetsu é muito bom, ASSISTA!!!" 
b = undefined // a variavel b é somente STRING 