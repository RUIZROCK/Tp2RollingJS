let texto=prompt("ingrese un texto:");

for(let i=0;i<texto.length;i++){
    if(i===texto.length-1){
        document.write(texto.charAt(i));
    }else{
        document.write(texto.charAt(i)+"-");
    }
}