function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }
        if (i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} ➡️ `
            }
        } else {
            // contagem decrescente
            for(let c = i; c>= f; c -= p) {
                res.innerHTML += `${c} ➡️ `
            }
        }
        res.innerHTML += `🏁`
    }
}