let resultado=0;
do{
    let numero=parseInt(prompt("Ingresar numero:"));
    if(isNaN(numero)){
        alert("El numero ingresado no es numero");
    }else{
        resultado+=numero;
    }
}while(confirm("continuar"));

document.write("resultado: "+resultado);