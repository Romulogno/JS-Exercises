function tabuada(){
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('tabu')

    var n = Number(num.value)
    c = 1 
    tab.innerHTML = `Tabuada`
    if(num.value.length == 0){
        window.alert('Numero invalido')
    } else{
        while(c <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
        }
    }
    
    
}