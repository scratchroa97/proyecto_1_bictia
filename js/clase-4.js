function datosusuario() {
    let nombreuser = document.getElementById("nombre").value
    let apellidouser = document.getElementById("apellido").value
    let edaduser = document.getElementById("edad").value
    let direccionuser = document.getElementById("direccion").value
    let telefonouser = document.getElementById("telefono").value
    let tipodocumentouser = document.getElementById("tipodocumento").value


    if (nombreuser != "" && apellidouser != "" && edaduser != "" && direccionuser != "" && telefonouser != "" && tipodocumentouser != "") {
        alert("Debe diligenciar los datos para proceder con el formulario")
    }
}
function preguntasuser() {
    let fres = document.getElementById("fiebrerespuesta").value
    let tres = document.getElementById("tosrespuesta").value
    let cres = document.getElementById("cabezarespuesta").value

    if (fres == "si" && tres == "no" && cres == "no") {
        alert("Tranquilo no hay alerta de COVID-19, Por ahora!!!!")
    }
    if (fres = "si" && tres == "si" && cres =="no") {
        alert("Debe realizarce la prueba PCR, Corrale....")
    }
    if (fres = "si" && tres == "si" && cres == "si") {
        alert("Debe ponerse en CUARENTENA, échese la bendición")
    }
    if (fres == "no" && tres == "no" && cres == "no"){
        alert("Tranquilo no hay alerta de COVID-19, Por ahora!!!!")
    }else{
        location.href = C:/Users/SCRATCHROA97/Desktop/Clase-1-bit/fonts/encuestajavas-4
    }
}

//Condicion
//1. Si tiene fiebre pero no tos ni dolor de cabeza -- No hay alerta de covid
//2. Si tiene fiebre y tos lo mandamos a realizar la PCR
//3. Si tiene los tres sintomas - Lo mandamos a cuarentena
//4. Si no tiene ningun sintoma -- no hay alerta de covid
//ha tenido contacto con alguien positivo en covid  -- SI o NO
//se realizado la PCR -- SI o NO
//Condicion
//1. Si tiene contacto con alguien positivo lo mandamos a cuarentena
//2. Si tiene la PCR en positivo lo mandamos a cuarentena
//3. Si tiene la PCR en negativo pero la sintomatologia la tiene en postivio lo mandamos a tomarse otra PCR

function encuestados1(){
    let contacto = document.getElementById("contactousuario").value
    let pcr = document.getElementById("pcrusuario").value

    if (contacto == "si"){
        alert("Debe ponerse en CUARENTENA, Otra vez !!")
    }
    if (pcr == "si"){
        alert("Debe ponerse en CUARENTENA, Una vez mas!!")
    }
    if (pcr == "no" ){
        alert("Debe tomarse la prueba PCR debido a sus sintomas")
    }
}