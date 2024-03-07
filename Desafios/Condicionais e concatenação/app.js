let dia;
dia = prompt('Qual é o dia da semana?');
if (dia == 'Sábado' || 'Domingo'){
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let numero;
numero = prompt('Coloque um número');
if (numero >= 0){
    alert('Número positivo');
} else{
    alert('Número negativo');
}

let pontos;
pontos = prompt('Qual sua pontuação?');
if (pontos >= 100){
    alert('Parabéns, você venceu!');
} else{
    alert('Tente novamente para ganhar.');
}

let saldo;
saldo = prompt('Qual seu saudo?')
alert(`Seu saldo da conta é R$${saldo}`);

let nome;
nome = prompt('Qual seu nome?')
alert(`Bem vindo ${nome}`);