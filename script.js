    function carregar(){
    var msg = window.document.getElementById('texto')
    var msg2 = window.document.getElementById('texto2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var fusoHorario = Intl.DateTimeFormat().resolvedOptions().timeZone;
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    msg.innerHTML = `Agora são ${hora} hora(s) ${minuto} minuto(s) e ${segundo} segundo(s). ${fusoHorario}`
    setTimeout(function() {carregar()}, 500);

    if (hora >= 0 & hora < 12){
        msg2.innerHTML = "Bom Dia!"
    img.innerHTML = '<img src="imgs/foto-manha.png">'
    document.body.style.backgroundImage = "url('imgs/bg-manha.jpg')"
    }
    else if (hora >= 12 & hora < 18) {
        msg2.innerHTML = "Boa Tarde!"
    img.innerHTML = '<img src="imgs/foto-tarde.png">'
    document.body.style.backgroundImage = "url('imgs/bg-tarde.jpg')"
    }
    else {
        msg2.innerHTML = "Boa Noite!"
    img.innerHTML = '<img src="imgs/foto-noite.png">'
    document.body.style.backgroundImage = "url('imgs/bg-noite.jpg')"
    }
}