/* O keyof operador em TypeScript é usado para obter a união de chaves de um tipo de objeto */
// O keyof operador pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves.

interface User {
    name: string;
    age: number;
    location: string;
  }

type UserKeys = keyof User; // "name" | "age" | "location"
const key: UserKeys = 'name'; // virou string 

function printPersonProperty(user: User, property: UserKeys) {
    console.log(`A person's ${property} is ${user[property]}`);
  }
  let user = { name: "Alice", age: 25, location: "Paris" };

printPersonProperty(user, "name"); // The person's name is Alice
printPersonProperty(user, "age"); 
// criei uma função para printar as propriedades e seus valores