function verificar() {
    var start = Number(document.querySelector('#start').value)
    var end = Number(document.querySelector('#end').value)
    var step = Number(document.querySelector('#step').value)
    var res = document.querySelector('div.res')
    if (start <= 0 && end <= 0 || start < 0 || end < 0) {
        alert('O valor de inicio e fim devem ser maior ou igual a 0')
    } else if (start > end) {
        alert('O valor do fim deve ser maior que o início')
    } else if(step <= 0) {
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
