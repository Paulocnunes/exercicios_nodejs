// ## Atividade 2 ##

let rs = require('readline-sync');
let Pergunta1 = rs.question('Voce esta usando mascara sempre que precisa sair de casa? (S ou N)\n')


if (Pergunta1 == 'S') {
    console.log('Muito bem!')
}   
else {
    console.log('A mascara é um objeto essencial durante o periodo de pandemia, use sempre que precisar sair! Seja consciente!')
}

let Pergunta2 = rs.question('Voce esta lavando as maos frenquentemente e de maneira correta? (S ou N)\n')

if (Pergunta2 == 'S') {
    console.log('Continue assim!')
}
else {
    console.log('Lavar as mãos é um cuidado básico na prevenção do corona virus, procure fazer com frequencia e de maneira correta!')
}

// ## Atividade concluída ##
