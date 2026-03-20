// paradigma(pesquisar mais) orientada a objetos

const { log } = require("console")

function cadastro(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
}



const pintura = {
    nomePintura: "A Última Ceia",
    nomeArtista: "Leonardo da Vinci",
    ano: 1498,
    significado: "retrata Jesus anunciando a traição entre seus apóstolos" 
}

console.log(`Minha pintura favortita é ${pintura.nomeArtista}, feita por ${pintura.nomeArtista} em ${pintura.ano} e  ${pintura.significado}`)



const user1 = new cadastro ('Bruno', 22, 'Brazil')
const user2 = new cadastro ('Rafael', 18, 'Germany')
const user3 = new cadastro ('Willian', 36, 'Russian')


console.log(user1)
console.log(user3)
console.log(user2)
