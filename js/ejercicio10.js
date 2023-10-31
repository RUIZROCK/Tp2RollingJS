const filas=parseInt(prompt("Ingresar numero de filas"));
const columnas=parseInt(prompt("Ingresar numero de columnas"));

let total=filas*columnas;

document.write("<table><tbody>")

for(let f=0; f<filas; f++){
    document.write("<tr>")
    for(let c=0; c<columnas;c++){
        document.write("<td>"+total+"</td>");
        total--;
    }
    document.write("</tr>")
}

document.write("</tbody></table>");