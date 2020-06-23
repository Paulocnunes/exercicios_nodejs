// ## Atividade 4 ##

let rs = require('readline-sync')
console.log('Bem vindo(a), vamos descobrir qual o seu signo!')
let dia = rs.question('Qual o dia do seu aniversario?\n')
let mes = rs.question('Qual o mes do seu nascimento? (Em numeros)\n')

if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
    console.log('Você é do signo de Áries')
}
else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
    console.log('Você é do signo de Touro.')
}
else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
    console.log('Você é do signo de Gêmeos')
}
else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
    console.log('Você é do signo de Câncer.')
}
else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)) {
    console.log('Você é do signo de Leão.')
}
else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)) {
    console.log('Você é do signo de Virgem.')
}
else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
    console.log('Você é do signo de Libra.')
}
else if ((dia >= 23 && mes == 10) || (dia <= 21 && mes == 11)) {
    console.log('Você é do signo de Escorpião.')
} 
else if ((dia >= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
    console.log('Você é do signo de Sagitário')
}
else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
    console.log('Você é do signo de Capricórnio.')
}
else if ((dia >= 21 && mes == 1) || (dia <= 18 && mes == 2)) {
    console.log('Você é do signo de Aquário.')
}
else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
    console.log('Você é do signo de Peixes.')
}

else { 
    console.log('Valores inválidos, digite novamente o dia e o mês de seu nascimento em números.')
}
// ## Atividade concluída. ##
