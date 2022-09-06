function carregar(){
    var msg = window.document.getElementById('texto')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.` 

    if (hora >= 0 & hora < 12){
    //Bom Dia!
    img.innerHTML = '<img src="imgs/foto-manha.png">'
    document.body.style.background = '#ffe99c'
    }
    else if (hora >= 12 & hora < 18) {
    //Boa Tarde!
    img.innerHTML = '<img src="imgs/foto-tarde.png">'
    document.body.style.background = '#d0c1c4'
    }
    else {
    //Boa Noite!
    img.innerHTML = '<img src="imgs/foto-noite.png">'
    document.body.style.background = '#1e90ff'
    }
}