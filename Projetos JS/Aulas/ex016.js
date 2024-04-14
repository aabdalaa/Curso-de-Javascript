let cont = [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
cont.sort()
cont.push(10)

let us = cont.indexOf(7)

console.log(`O número 7 está na posição ${us}`)
console.log('----------------------------------------')
for(let pos in cont){
    console.log(`${pos} - CONTAGEM: ${cont[pos]}`)
}