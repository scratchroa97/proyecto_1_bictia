function guardar() {
    let num = document.getElementsByName("numeromul").value
    let max = document.getElementsByName("numeromax").value
    
    if (num != '' && max != "") {
        for (var y = 1; y  <= max; y++) {
            resultado = parseInt(y) * parseInt(num)
                console.log(num + " x " + y + " --> " + parseInt(y) * parseInt(num))
        }
    }else {
            console.log('Por favor ingrese todos los datos')
        }
    }