let num = document.querySelector('input#txtnum')   // conexao com a caixa de texto que vai obter os numeros
let lista = document.querySelector('select#lista')  // conexao com o select que vai exibir a lista de numeros adicionados
let res = document.querySelector('div#res')         // conexao com a div que vai receber e exibir os resultados
let valores = []                                    // iniciacao do vetor

function isnumero(n) {                              //funcao que testa se o numero digitado esta entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100)
        return true
        else {
            return false
        }
}

function inlista(n, l) {                            //funcao que testa se o numero ja existe na lista 
    if (l.indexOf(Number(n)) != -1) {               // -1 significa que o numero nao esta na lista  "!= -1" nega que o numero esteja na lista, ou seja se o numero nao estiver na lista retornar um true 
        return true
    } else {
        return false
    }
}

function add() {                                                    // funcao que adiciona numeros na lista
    if (isnumero(num.value) && !inlista(num.value, valores)) {      // Esse "if" chama os retornos  das duas funcoes acima (true or false)
        valores.push(Number(num.value))                             // faz a adicao do numero digitado no vetor 
        let item = document.createElement('option')                 // cria a tag option
        item.text = `Valor ${num.value} Adicionado`                 // adiciona text a tag criada
        lista.appendChild(item)                                     // faz tag ser exibida
        res.innerHTML = ''                                          // limpa o texto da Div res quando voce adiciona um novo valor
    } else {
        window.alert('Valor invalido ou ja encontrado na lista')    
    }   
    num.value = ''                                                  // faz a caixa de texto que tem o valor num ficar vazia
    num.focus()                                                     // faz o foco do cursos ficar na caixa de texto 
}

function validar(){                                                 // funcao que valida os numeros que foram adicionados
    if (valores.length ==0){                                        // testa se existe algum valor dentro da variavel
        window.alert('Adicione valores antes de finalizar')
    } else{                                 
        let tot = valores.length                                    // cria a variavel que tem o quantidade de valores que foram adicionados
        let maior = valores [0]                                     // cria a variavel que vai armazenar o maior valor
        let menor = valores [0]                                     // cria a variavel que vai armazenar o menor valor
        let soma = 0                                                // cria a variavel que vai armazenar a soma dos valores
        let media = 0                                               // cria a variavel com vai armazenar a media soa valores
        for(let pos in valores) {                                   // "for" que faz a varredura do vetor
            soma += valores [pos]                                   // calculo da soma dos valores de cada posicao do vetor
            if (valores[pos] > maior)                               // "if" que compara o valor do indice do vetor e transfere o maior numero para a variavel "maior"
            maior = valores [pos]
            if (valores[pos] < menor)                               //"if" que compara o valor do indice do vetor e transfere o menor numero para a variavel "menor"
            menor = valores [pos]
        }
        media = soma / tot                                          // calculo da media dos numeros do vetor
        res.innerHTML = ''                                          // resultados apresentados ao usuario 
        res.innerHTML += `<p> Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p> A media dos valores digitados e ${media} </p>`
    }
}

