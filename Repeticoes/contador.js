
function contar(){
    var number = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    res.innerHTML = `Contando: `

    if (number.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){    // ==0 significa vazio e nao zero
        window.alert('[ERRO] Existe um campo vazio')
        } else {
        var i = Number(number.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        var c = i  // variavel para usar com o Do while
        if(p <= 0){
            window.alert('Passo nao pode ser menor ou igual a 0, considerando passo 1')
            p = 1
        }
            if (i <= f) {
                while ( c <= f ){
                res.innerHTML += `${c} \u{27A1} `
                c +=p 
                } 
      
            } else {
                while (c >= f) {
                res.innerHTML += `${c} \u{27A1} `
                c -= p
                }
            }
    
    } 

}
   
// outras formas de resolver o mesmo problema
//Fazendo com o For  
//  for(var c = i; c <= f; c += p){

// Fazendo com o Do While
         /* do{
              res.innerHTML += `${c} `
              c +=p 
          } while ( c <= f) */
          