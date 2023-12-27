/* Em TypeScript, enum é uma maneira de declarar um conjunto nomeado de constantes.
 Ele oferece uma maneira de associar valores a nomes de forma mais legível e semântica. */

/* Enum Numbers */

enum Genero {
  Masculino = 0,
  Femenino = 1,
}

function respond(recipient: string, genero: Genero): void {
  // ...
  console.log("oi")
}

respond("Fulano", Genero.Masculino);


/* Enum Strings */

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

/* Enum Heterogeneos  */
// pode misturar os enums com strings e numbers

enum EnumHeterogeneo {
  No = 0,
  Yes = "YES",
}

/* Enum membros computados e constantes */

// E.X é constante porque é o primeiro membro do enum e nao tem inicializador:
  enum E {
    X, // o valor é 0
  }

  // Ambos os casos sao constantes:
  // - O E1 porque não tem inicializador() 
  // - O E2 porque o membro enum anterior era um numérico constante.
  enum E1 {
    X, // 0
    Y, // 1
    Z, // 2
  }
   
  enum E2 {
    A = 1,
    B,
    C,
  }

  /* É constante também quando o membro enum é inicializado com uma expressão enum constante!!
  uma expressão enum constante é um subconjunto de expressões TypeScript que podem ser 
  totalmente avaliadas em tempo de compilação.  */

                                      /* EXEMPLO */
  // - uma expressão enum literal (basicamente uma string literal ou um literal numérico) 
  // - referencia o membro constante já definido dai surge um diferente
  // - um dos +, -, ~ operadores unários aplicados à expressão enum constante
  // - +, -, *, /, %, <<, >>, >>>, &, |, ^ operadores binários com expressões enum constantes como operandos

  enum FileAccess {
    // membros constantes
    None, // 0
    Read = 1 << 1, // 2
    Write = 1 << 2, // 4
    ReadWrite = Read | Write, // 6
    // membro computado
    G = "123".length, 
  }

/* Union enums and enum member types */

/* Enums em tempo de execução */

enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
  
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
  
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("ERROR", "This is a message");

/* const enums */ // ao contrário enums regulares eles são completamente removidos durante a compilação. 
const enum exemplo {
    A= 0,
    B= A*1
}

const enum Direction2 {
    Up,
    Down,
    Left,
    Right,
  }
  
  let directions = [
    Direction.Up, // 0
    Direction.Down, // 1
    Direction.Left, // 2
    Direction.Right, // 3
  ];

const enum DiasSemana {
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado
}
let dia: DiasSemana = DiasSemana.Segunda;
console.log(dia); // saída: 1 (o índice da enumeração começa em 0)

 const enum Status {
  ATIVO=0,
  INATIVO=1,
  PENDENTE=2
}

let testeStatus: Status = Status.ATIVO;
console.log(testeStatus); // saída: 0
