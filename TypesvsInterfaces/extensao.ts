
// Ambos suportam a extensão de outras interfaces e tipos.
// Os tipos fazem isso através da interseção de tipos,
// enquanto interfaces possuem uma palavra-chave (extends).

type Coruja = { noturno: true } & TipoPassaro; // tipo interseção de um tipo 
type Robin = { noturno: false } & InterfacePassaro; // tipo interseção com interface

/* interface estendendo de um tipo */
interface Pavao extends TipoPassaro {
  colorido: true;
  voa: false;
}
/* interface estendendo de uma interface */
interface Galinha extends InterfacePassaro {
  colorido: false;
  voa: false;
}

let coruja: Coruja = { asas: 2, noturno: true };
let galinha: Galinha = { asas: 2, colorido: false, voa: false };
