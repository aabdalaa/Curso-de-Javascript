function verifica(){
    var col = document.getElementById("col")
    var ui = document.getElementById("mod")
    ui.innerHTML = ''
    var inicio = document.getElementById("num1")
    var fim = document.getElementById("num2")
    var passo = document.getElementById("num3")
    var nmb = Number(inicio.value)
    var lim = Number(fim.value)
    var inc = Number(passo.value)
    col.innerHTML = 'Contando:'
    if(inc == 0){
        alert('CONSIDERANDO VALOR DE PASSO EM 1')
        inc += 1
        for (; nmb <= lim; nmb += inc){
            ui.innerHTML += `${nmb} ➡️ `
        }
        ui.innerHTML += '🏁'    
    } else if(lim < nmb){
        for (; nmb >= lim; nmb -= inc){
            ui.innerHTML += `${nmb} ➡️ `
        }
        ui.innerHTML += '🏁'
    } else if(lim == 0 || nmb == 0 || inc == 0){
        ui.innerHTML = 'Impossível contar!'
    } else{
        for (; nmb <= lim; nmb += inc){
            ui.innerHTML += `${nmb} ➡️ `
        }
        ui.innerHTML += ' 🏁'
    }
}