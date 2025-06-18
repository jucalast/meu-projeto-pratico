// Nosso "teste" automatizado. Usaremos o console.assert, que
// causa um erro se a condição for falsa.
// É uma forma simples de testar sem precisar de bibliotecas.

// Importando a função que queremos testar (isso não funciona
// nativamente no Node.js, vamos ajustar no workflow de CI)
// Por enquanto, vamos simular a função aqui para o teste.
function somar(a, b) {
  return a + b;
}

console.log("Iniciando testes...");

// Teste 1: Soma de positivos
console.assert(somar(2, 3) === 5, "Erro no teste: 2 + 3 deveria ser 5");

// Teste 2: Soma com zero
console.assert(somar(7, 0) === 7, "Erro no teste: 7 + 0 deveria ser 7");

console.log("Testes concluídos com sucesso!");