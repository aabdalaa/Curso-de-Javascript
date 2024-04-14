function fatorial(v){
    if (v == 1){
        console.log('1! =')
        return 1
    } else if (v == 0){
        console.log('0! =')
        return 0
    } else{
        console.log(`${v}! = `)
        return v * fatorial(v-1)
    }
}

console.log(fatorial(1))