
function carregar() {
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(179, 210, 247), rgb(90, 157, 188), rgb(79, 124, 250))'
        msg2.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(246, 218, 165), rgb(243, 194, 104), rgb(250, 173, 31))'
        msg2.innerHTML = 'Boa tarde!'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, rgb(44, 70, 99), rgb(13, 26, 63), rgb(50, 27, 56))'
        msg2.innerHTML = 'Boa noite!'
    }
}

function watch() {
    setInterval(() => {
        var data = new Date()
        var hora = data.getHours()
        var min = data.getMinutes()
        var msg1 = document.getElementById('msg1')
        msg1.innerHTML = `Agora são ${hora} horas e ${min} minutos - ${data.getSeconds()}`
    }, 500)
}

watch()