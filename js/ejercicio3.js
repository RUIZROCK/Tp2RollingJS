/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

 */
let texto="";
do{
    let palabra=prompt("escribi un texto","'cancelar' para finalizar");

    if(texto.length===0){
        texto=palabra;
    }else{
        texto=texto + "-" +palabra;
    }
}while(confirm("desea ingresar otra palabra?"))
alert("Fin del programa");
document.write(texto);