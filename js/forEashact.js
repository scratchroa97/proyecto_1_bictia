let deseos_navidad = ["casa", "carro", "finca", "baloto"]
let deseos_user = document.getElementById('lista_deseos')


deseos_navidad.forEach(function (element, index) {
    deseos_user.innerHTML += "<option value='" + index + "'>" + element + "</option>"
})

function deseos_usuario(deseo_final) {
    if (deseo_final == 0) {
        Swal.fire('Tu casa sera de 4 pisos con terraza')
    }
    if (deseo_final == 1) {
        Swal.fire('Tu carro sera convertible')
    }
    if (deseo_final == 2) {
        Swal.fire("Tu finca tendra de ñapa 3 vacas")
    }
    if (deseo_final == 3) {
        Swal.fire("Tu premio se lo tumbo el gobierno oink oink")
    }
    else if (deseo_final == "") {
        Swal.fire("No seleccionaste ningun deseo mejor vete a tomar")
    }
}



function deseo_final1() {
    let name1 = document.getElementById('nombre_usuario').value

    if (name1 != "") {
        Swal.fire("Lo sentimos" + " " + name1 + " " + "tu deseo de navidad llegara hasta el otro año por el paro nacional")
    }
    else {
        Swal.fire("por favor digite su nombre")
        
    }
}
