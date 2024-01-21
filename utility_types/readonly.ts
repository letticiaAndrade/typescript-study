/* O Readonly constrói um tipo com todas as propriedades do tipo definidas como readonly, o que 
significa que as propriedades do tipo construído não podem ser reatribuídas. */

/*  principalmente usado para tornar propriedades de um objeto imutáveis */
// ATENÇÃO: não é usado para tipos primitivos

interface Musica {
    titulo: string;
    cantor: string;
    estilo: string;
  }
  
  const musica1: Readonly<Musica> = {
    titulo: 'Thank u, next',
    cantor: 'Ariana Grande',
    estilo: 'Pop'
  };
  
  musica1.titulo = 'Everyday'; // dá erro, pois é uma propriedade apenas de leitura 

  // o Readonly não funcionará com tipos primitivos
  let senha: Readonly<string> = "lele2002" 

  console.log(senha)
  senha = "lele000"