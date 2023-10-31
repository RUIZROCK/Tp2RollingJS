let texto=prompt("ingresar texto");

let cont=0;

for(let i=0;i<texto.length;i++){
    switch(texto.charAt(i).toLowerCase()){
        case "a":
            cont++;
            break;
        case "e":
            cont++;
            break;
        case "i":
            cont++;
            break;
        case "o":
            cont++;
            break;
        case "u":
            cont++;
            break;
        default:
            break;
    }
}

document.write("Cantidad de vocales:"+cont);