function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`

    if (hora >= 0 && hora <12){
        img.src = 'imagens/day.png'
        document.body.style.background = '#f1d969'
    } else if (hora >=12 &&  hora <19){
        img.src = 'imagens/afternoon-crop.png'
        document.body.style.background = '#db9442'
    } else {
        img.src = 'imagens/night-crop.png'
        document.body.style.background = '#131c38'
    }

}