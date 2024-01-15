/* No TypeScript, a palavra-chave as é usada para asserções de tipo, permitindo que você informe 
explicitamente o compilador sobre o tipo de um valor quando ele não pode ser inferido automaticamente. 
As asserções de tipo são uma maneira de substituir o comportamento de verificação de tipo estático padrão 
e dizer ao compilador que você sabe mais sobre o tipo de uma expressão específica do que ele. */

/* não causam nenhum tipo de conversão. 
Eles simplesmente fornecem uma maneira para o programador substituir a inferência de tipo realizada
pelo compilador. */

// EXEMPLO 

let algumValor: any = "Praticando o tipo as type do TypeScript!";
let tamanhoString: number = (algumValor as string).length;

console.log(tamanhoString); // saída 40