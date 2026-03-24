const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let tentativaPreco = 0
let tentativaquantidade = 0


const cadastrados = []

function cadastrandoNome (){
    rl.question('Digite o nome do produto: ', input2 => {
        const nome = input2.toLowerCase()
        cadastrandoPreco()

        function cadastrandoPreco (){ 
            rl.question('Digite o preço do produto que deseja comprar: ', input3 => {
            const preco = parseFloat(input3)
            if (isNaN(preco)){
                if (tentativaPreco < 3){
                console.log(`O número digitado não é um valor válido! tente novamente...`)
                cadastrandoPreco()
                } else {
                    console.log('Número de tentativas excedido. Encerrando o programa.')
                    rl.close()
                }
            } else{
                    //atribuir preco
                cadastrandoQuantidade()
            }
                function cadastrandoQuantidade() {
                    rl.question('Digite a quantidade de produtos que você deseja comprar: ', input4 => {
                        const quantidadeEstoque = parseInt(input4)
                        if (isNaN(quantidadeEstoque)){
                            if (tentativaquantidade < 3){
                            console.log(`O número digitado não é um valor válido! tente novamente...`)
                            cadastrandoQuantidade()
                            } else {
                                console.log('Número de tentativas excedido. Encerrando o programa.')
                                rl.close()
                            }
                        } else{
                        let objetoCadastro = {
                            nome: nome,
                            preco: preco,
                            quantidade: quantidadeEstoque
                        }
                        cadastrados.push(objetoCadastro)
                        console.log(`\nProduto adicionado ao carrinho com sucesso!\n`)
                        iniciar()
                    }
                })
            }
        })}
    })
}

function listarProdutos() {
    let valorFinal = 0
    cadastrados.forEach(precinho => valorFinal += precinho.preco * precinho.quantidade)
    cadastrados.forEach(lista => console.log(`Produto: ${lista.nome} -- Preço R$${lista.preco} -- quantidade: ${lista.quantidade} -- Valor Total: R$${lista.preco * lista.quantidade}`), )
    console.log(`O valor total da sua compra é: R$${valorFinal}`);
    rl.close()
}


function iniciar() {
    rl.question('\nDigite o opção desejada:\n "cadastrar"\n "exit"\n "resumo"\n', input => {
        if (input === 'cadastrar'){
            cadastrandoNome()
        } else if (input === 'exit'){
            rl.close()
        } else if (input === 'resumo'){
            listarProdutos()
        } else {
        console.log(`Opção inválida! tente novamente...`)
        iniciar()
        }
    })
}


iniciar()