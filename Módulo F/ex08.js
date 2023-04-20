let amg = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

amg.engordar(2)
console.log(`${amg.nome} pesa ${amg.peso}Kg`)