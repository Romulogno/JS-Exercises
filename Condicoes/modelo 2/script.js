function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length = 00 || Number(fano.value) > ano){
     window.alert('[ERRO] Verifique os dados inseridos e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex') // conecta o nome dos radios buttons
        var idade = ano - Number(fano.value) // cria a variavel idade e faz a subtracao do valor digitado pelo usuario pelo ano atual ( ano - fano = ???)
        var genero = ''  // cria uma variavel com uma string vazia
        var img = document.createElement('img')  // cria o elemento img dentro do html
        img.setAttribute('id', 'foto')  // adiciona o id 'foto' ao elemento img criado na linha acima


        // Esse IF vai fazer a verificacao de genero e idade
        if (fsex[0].checked){  // se a variavel fsex esta marcada, [0] igual a primeira opcao no caso masculino 
            genero = 'Homem'   // a variavel genero recebe o valor de 'Homem'
            if (idade >=0 && idade <10) {    // verifica idade entre 0 e 10
                img.setAttribute('src', 'imagens/babyboy.png') // adiciona a foto de babyboy se o valor da linha acima for verdadeiro
            } else if (idade <21){          // verifica idade e menor que 21 
                img.setAttribute('src','imagens/teenboy.png' )   //adiciona a foto de teenboy caso o valor do if seja verdadeiro
            } else if (idade <50){          // verifica a idade menor de 50 
                img.setAttribute('src', 'imagens/man.png')      // adiciona a foto de adulto se o if seja verdadeiro
            } else {                        // se nenhuma das opcoes acima forem verdadeiras faca
                img.setAttribute('src', 'imagens/oldman.png')   // adiciona a imagem de idoso
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'imagens/babygirl.png')
            } else if (idade <21){
                img.setAttribute('src', 'imagens/teengirl.png')
            } else if (idade <50) {
                img.setAttribute('src', 'imagens/woman.png')
            } else {
                img.setAttribute('src', 'imagens/oldwoman.png')
            }
        }
           
    }
    res.style.textAlign = 'center'  // faz o texto do id da variavel res ficar alinhada 
    res.innerHTML = `Detectamos ${genero} com ${idade} anos` // adiciona o texto concatenado a variavel res 
    res.appendChild(img)  // insere a tag imagem dentro da div com o id res


}