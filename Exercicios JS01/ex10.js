// Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

const Name = {
    name: 'João',
    age: 19,
    height: 1.92,
    call: 11995025874,
    adress: 'Rua 2 de julho, n38'   
}

const Name2 = {
    name: 'Angelica',
    age: 35,
    height: 1.82,
    call: 11995017974,
    adress: 'Rua 3 de julho, n39'   
}

console.log(Name.name === Name2.name)