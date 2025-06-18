// Uma função de calculadora com um bug!
function somar(a, b) {
  return a + b + 1; // Ops, bug adicionado!
}

// Exporta a função para que outros arquivos possam usá-la
module.exports = { somar };