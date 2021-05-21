var numerouno = prompt("Digite Un Numero")
    numerouno = parseInt(numerouno)

for (var operacion = 1 ; operacion <= numerouno ; operacion++){
    console.log("Nuestra operacion va en el numero" + " " + operacion)
}

if(operacion%2){
    alert("Su N° es par")
    alert("Bienvenido a la pizzeria 'Mamma Mia'")
}else{
    alert("Su N° es impar")
    alert("Bienvenido a la pizzeria 'Mamma Mia'")
}

function guardardatos(){
    let tuser = document.getElementsByName("tipousuariouno").value
    let tgene = document.getElementsByName("generousuariouno").value

    if (tuser == "menor" && tgene == "mujer") {
        alert("Acerquese a caja y reclame un jugo y pizza hawaina gratis")
    }
    if (tuser == "menor" && tgene == "hombre") {
        alert("Acerquese a caja y reclame un jugo y pizza tres carnes gratis")
    }
    if (tuser == "menor" && tgene == "otra") {
        alert("Acerquese a caja y reclame un jugo gratis")
    }
    if (tuser == "mayor" && tgene == "otra") {
        alert("Acerquese a caja y reclame una cerveza gratis")
    }
    if (tuser == "mayor" && tgene == "mujer") {
        alert("Acerquese a caja y reclame una cerveza y pizza hawaina gratis")
    }
    if (tuser == "mayor" && tgene == "hombre") {
        alert("Acerquese a caja y reclame una cerveza y pizza tres carnes gratis")
    }
    if (tuser == "otro" && tgene == "otra") {
        alert("Por ahora no cumples ninguna condicion para premio")
    }
}
