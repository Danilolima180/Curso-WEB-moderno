console.log("aula 2 de Dados");

let preco = 19.9;
let desconto = 0.4;
console.log(19.9 * 0.6);
console.log(preco * (1 - desconto)); //regra de matematica dentro de chaves para o resultado ser vezes o outro valor.
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "caderno"; // string = sequencia de simbolo e letras(texto)
let categoria = "papelaria";
console.log(
  "Produto: " +
    nome +
    ", Categoria: " +
    categoria +
    ", Preço: " +
    preco +
    ", Desconto: " +
    desconto
); //+ em strings são chamados concatenação
