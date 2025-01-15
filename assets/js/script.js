function verificar() {
    var start = Number(document.querySelector('#start').value)
    var end = Number(document.querySelector('#end').value)
    var step = Number(document.querySelector('#step').value)
    var res = document.querySelector('div.res')
    if (start == 0 && end == 0) {
        res.innerHTML = 'Insira valores válidos'
    }  else if(step <= 0) {
        alert('Quantidade de passos invalida, iniciando do mínimo possível 1')
        for (n = start; n <= end; n++) {
            res.innerHTML += `${n} &#128073;`
        }
        res.innerHTML += `&#129302;`
    } else {
        for (n = start; n <= end; n+= step) {
            res.innerHTML += `${n} &#128073;`
        }
            res.innerHTML += `&#129302;`
    }
}
function limpar() {
    res = document.querySelector('div.res');
    res.innerHTML = ''
}
