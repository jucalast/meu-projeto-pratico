// 1. Importa o módulo 'assert' para fazer as verificações
const assert = require('assert');

// 2. Importa a função 'somar' que queremos testar
const { somar } = require('../js/calculadora.js');

console.log("Iniciando testes...");

// Teste 1: Soma de positivos
// Usamos assert.strictEqual(valor_atual, valor_esperado, "mensagem de erro");
// Ele vai parar o script se valor_atual !== valor_esperado
assert.strictEqual(somar(2, 3), 5, "Erro no teste: 2 + 3 deveria ser 5");

// Teste 2: Soma com zero
assert.strictEqual(somar(7, 0), 7, "Erro no teste: 7 + 0 deveria ser 7");

console.log("Testes concluídos com sucesso!"); // Esta linha não será alcançada se um teste falhar