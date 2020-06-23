// ## Atividade 1 ##

let rs = require('readline-sync');
let numeroVoo = rs.question('Ola, qual o numero do seu voo?\n');
let Fileira = rs.question('Em qual fileira deseja sentar? A, B, C, D ou F?\n');

let CartaodeEmbarque = ('Aqui está o seu cartão de embarque:\n' + 'Nº do voô: ' + numeroVoo + ' ---- Fileira: ' + Fileira);

console.log (CartaodeEmbarque);


// ## Atividade concluída ##
