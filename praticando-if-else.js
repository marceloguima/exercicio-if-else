//Ex 01
let diaSemana = prompt('Olá tudo bem? Qual é o dia da semana?');

if (diaSemana == 'sábado' || diaSemana == 'domingo'){
    alert('Tenha um ótimo fim de semana!');
}else{
    alert('Tenha uma ótima semana!');
}

//Ex 02
let numero = prompt('digite um número')
if (numero < 0){
    alert('O número que você digitou é negativo');
}else{
    alert('O número que você digitou é positivo');
}

//Ex. 03
let pontuação = 105;
if(pontuação >=100){
    alert('Parabens você ganhou!')
}else{
    alert('Tente novamente!')
}

//Ex 04
let saldoConta = 500;
alert('Seu saldo é de R$' + saldoConta)

//Ex05
let nomeUsuario = prompt('Qual é o seu nome?');
    alert('seja bem vindo ' + nomeUsuario + '!');