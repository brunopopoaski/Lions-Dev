lotes = [50, 40, 60, 30, 70]
let totalIngressos = 0

function calcularMedia(lotes) {
    for (let i = 0; i < lotes.length; i++) {
        totalIngressos += lotes[i]
    }
    return totalIngressos
}

console.log(`O total de ingressos vendidos foi: ${calcularMedia(lotes)}`)