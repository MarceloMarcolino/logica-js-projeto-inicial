let contador = 1;

while (contador <= 10){
    alert(contador);
    contador++;
}
contador--;
while (contador >= 0){
    alert(contador);
    contador--;
}

let regressiva = parseInt(prompt('Para contar a partir de qual número?'));
while (regressiva >= 0){
    console.log(regressiva);
    regressiva--;
}
regressiva++;
let progressiva = parseInt(prompt('Para contar até qual número?'));
while (regressiva <= progressiva){
    console.log(regressiva);
    regressiva++;
}