let valores = [5, 7, 3, 2, 9, 0]

console.log(valores)

/* Forma mais longa a se evitar de fazer:
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

Forma mais prática a se fazer usando for
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */

// Forma mais simplificada usando for in
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
