function verificar() {
    let start = document.getElementById('start')
    let end = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.querySelector('div.res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = `Você esqueceu de digitar algum valor`
    } else {
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if (p <= 0) {
            window.alert(`Quantidade de passos invalida, começando do passo :1`)
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (x = i; x <= f; x += p) {
                res.innerHTML += `\u{1f449} ${x} `
            } 
        } else if (i > f) {
            //contagem decrescente
            for (x = i; x >= f; x -= p) {
                res.innerHTML += `\u{1f449} ${x} `
            }
        } 
    }
    res.innerHTML += `\u{1f3c1}`;
}


function limpar() {
    let res = document.querySelector('div.res')
    res.innerHTML = ' '
}
