function fatorial(x) {
    h = 1
    for(var g = x; g > 0; g--){
        console.log(`x ${g}`)
        h *= g
    }
    console.log(' = ')
    return h
}

console.log(fatorial(5))