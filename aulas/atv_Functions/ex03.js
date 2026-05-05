const numerosFibornacci = [0, 1]
let a = 0
let b = 0
let soma = 0

function listandoNumerosFibornacci(numberTest) {
    for (let i = 1; i < numberTest; i++) {
        a = numerosFibornacci[numerosFibornacci.length - 1]
        b = numerosFibornacci[numerosFibornacci.length - 2]
        soma = a + b
        if (soma < numberTest) {
            numerosFibornacci.push(soma)
        }
    }
    return numerosFibornacci
}

console.log(`6 - ${listandoNumerosFibornacci(6)}`);
console.log(`10 - ${listandoNumerosFibornacci(10)}`);
console.log(`50 - ${listandoNumerosFibornacci(50)}`);
console.log(`33 - ${listandoNumerosFibornacci(33)}`);
console.log(`12 - ${listandoNumerosFibornacci(12)}`);
console.log(`95 - ${listandoNumerosFibornacci(95)}`);