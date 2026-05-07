const prompt = require('prompt-sync') ();

function entradaDeInput(questao){
    const entrada = prompt(questao)
    return entrada
}

module.exports = {entradaDeInput}