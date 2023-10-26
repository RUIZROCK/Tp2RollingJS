/*
2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar 
la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

*/


let nota = parseInt(prompt("ingrese nota. para finalizar 9999"));

while(nota!==9999){
    if(nota<0 || nota>10){
        alert("Numero erroneo");
        nota = parseInt(prompt("Ingrese nota"));
    }

    if(isNaN(nota)){
        alert("Ingrese numero valido");
        nota = parseInt(prompt("Ingrese nota"));
    }

    if (nota>=0 && nota<=2){
        alert("muy deficiente");
    }

    if (nota>=3 && nota<=4){
        alert("insuficiente");
    }

    if (nota>=5 && nota<=6){
        alert("suficiente");
    }

    if (nota==7){
        alert("bien");
    }

    if (nota>=8 && nota<=9){
        alert("notable");
    }

    if (nota==10){
        alert("sobresaliente");
    }

    nota = parseInt(prompt("Ingrese nota"));
}

alert("fin del programa");