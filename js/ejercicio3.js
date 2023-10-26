/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

 */

let cadena=prompt("escribi un texto","'cancelar' para finalizar");


let texto="";

while(cadena!=="cancelar"){
    texto=cadena+"-"+texto;
    cadena=prompt("escribi un texto","'cancelar' para finalizar");
}
alert("Fin del programa");
document.write(texto);