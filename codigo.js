let numero = parseFloat(prompt("ingrese numero"));

let factorial = 1;
let salida;

if (numero<0){
    salida = "Los numeros factoriales deben ser positivos";
   } else if(numero==0){
    salida = `el factorial de ${numero} es ${factorial} `;
   } else{ 

    for( let i = 1; i <= numero; i++) {
    factorial *= i;
   }
    salida = `el factorial de ${numero} es ${factorial}`;

   }
   document.getElementById("resultado").innerText = salida;
