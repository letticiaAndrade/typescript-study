/* Um Alias de Tipo no TypeScript permite que você crie um novo nome para um tipo. */

// exemplo 
type Titulo = string;

type Autor = string;

type Livro = {titulo: Titulo, autor: Autor};

const livro:Livro = {autor:"Art Spiegelman", titulo: "Maus"}

type ID = string | number;

let id1 = "id1"
let id2 = 2
