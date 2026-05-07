
function validacaoNumber(numberInput) {
    const input = Number(numberInput)
    if (!isNaN(input)) {
        return input
    } else {
        return false
    }
}

function validacaoOperacao(operacaoInput) {
    const input = operacaoInput.trim()

    switch (input) {
        case '+':
            return input
        case '-':
            return input
        case '*':
            return input
        case '/':
            return input
        default:
            return false
    }
}

module.exports = { validacaoNumber, validacaoOperacao }