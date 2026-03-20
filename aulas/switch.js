/* 
                                                    estrutura switch (substitui uma quantidade grande de IF)
    switch () {
    case 1: 
        acao 1 
    break;
    case 2: 
        acao 2
    break;
    case 3: 
        acao 3 
    break;
    default:
        console.log('Cor desconhecida');
} */

/*                              exemplo
    switch ('vermelho') {
    'verde': 
        acao 1 
    'break';
    'vermelho': 
        acao 2
    break;
    'azul': 
        acao 3 
    'break';
    default:
        console.log('Cor desconhecida');
} */

//atv1

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

})

function cinemando(){

rl.question('Digite o gênero do filme escolhido ("ação", "comedia", "terror" ou "animação".): ', input =>{
    const genero = input.trim().toLowerCase()

    switch (genero) {
        case 'ação': 
        console.log(`O Gênero desejado está na sala 1, BOM FILME!`)
        rl.close()
        break;
        case 'comedia': 
        console.log(`O Gênero desejado está na sala 2, BOM FILME!`)
        rl.close()
        break;
        case 'terror': 
        console.log(`O Gênero desejado está na sala 3, BOM FILME!`)
        rl.close()
        break;
        case 'animação': 
        console.log(`O Gênero desejado está na sala 4, BOM FILME!`)
        rl.close()
        break;
        default:
            console.log(`Gênero não encontrado. Verifique as opções válidas`);
            cinemando()
    }
})
}

//cinemando()



////////////////////////

//atv2

function notando(){
rl.question('Digite uma nota para ser classificada: ', input => {
    const nota = parseInt(input)

    switch(true){
        case (nota >= 90):
            console.log("A");
            break;
        
        case (nota < 90 && nota >= 89):
            console.log("B");
            break;
        
        case (nota < 79 && nota >= 70):
            console.log("C");
            break;
        
        case (nota < 69 && nota >= 60):
            console.log("D");
            break;
        
        case (nota < 59):
            console.log("F");
            break;

        default:
            console.log(`Nota Inválida!`);
    }

})
}

//notando()



function salgadinhando(){
    rl.question('Digite um dos códigos para selecionar um salgadinho "A1", "B2" ou "C3": ', input => {
        const resposta = input.toLocaleUpperCase()
    
        switch(resposta){
            case 'A1':
                console.log("Você escolheu: Batata Chips");
                break;
            
            case 'B2':
                console.log("Você escolheu: Amendoim");
                break;
            
            case 'C3':
                console.log("Você escolheu: Biscoito de Chocolate");
                break;
    
            default:
                console.log('Código inválido. Tente novamente.');
        }
    
    })
    }

//salgadinhando()











