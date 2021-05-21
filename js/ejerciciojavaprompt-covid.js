
function datoscovid() {
    let nombre = document.getElementById("nombreuno").value
    var contacto1 = prompt("Ha tenido contacto con alguien positivo en Covid-19 Responda SI o NO")
    var sintoma1 = prompt("Ha presentado algun sintoma relacionado con Covid-19 Responda SI o NO")

    if (contacto1 == 'si' || contacto1 == 'SI' || contacto1 == 'Si' || contacto1 == 'sI') {
        alert("PONGASE EN CUARENTENA")
    }
    if (sintoma1 == 'si' || contacto1 == 'SI' || contacto1 == 'Si' || contacto1 == 'sI') {
        alert("EL SERVICIO MEDICO VA A SU DOMICILIO A TOMARLE LA PRUEBA, RECUERDE" + "  " + nombre + "  " + "QUE ESTE SERVICIO ES GRATUITO")
    }

}


