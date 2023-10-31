
let final=parseInt(prompt("ingresar numero"));

if(isNaN(final)){
    alert("numero invalido");
}else{
    for(let inicio=1;inicio<=final;inicio++){
        for(let i=1;i<=inicio;i++){
            document.write(i);
        }
        document.write("<br>");
    }
}

