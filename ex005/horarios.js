var agora = new Date()  //cria uma variavel que recebe o elemento Date 
var hora = agora.getHours()  // variavel hora recebe o valor da variavel 'agora' em horas
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora >= 5 && hora <=11) {
    console.log('Bom dia')
    } else if( hora <= 18 && hora >=12) { 
        console.log('Boa tarde')
    } else if ( hora >=19 && hora <=24) {   
        console.log('Boa noite')
    } else{ (hora >=0 && hora <=4)
        console.log('Boa madrugada')

    
}