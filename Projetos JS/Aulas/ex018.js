let amigo = {nome: 'josé', idade: 30, peso: 85.4, profissao: 'Programador', sobrenome: 'Fernando', engordar(p){return this.peso += p}}

console.log(`${amigo.nome} ${amigo.sobrenome};
tem ${amigo.idade} anos;
pesava ${amigo.peso} kg;
trabalha como ${amigo.profissao};
engordou e está com ${amigo.engordar(5)} kg.`)
