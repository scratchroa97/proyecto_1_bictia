let clientes = ['mariano', 'paulina', 'lazaro', 'jose', 'luis', 'belinda', 'helena', 'vanessa', 'luciano', 'amaranta']
clientes.push('manuela', 'alex', 'norma', 'robert')

function clientes_estrellas() {
    Swal.fire({
        icon: 'info',
        title: 'Felicidades ' + clientes[4] + ' y ' + clientes[7] + ' ustedes son nuestros mejores clientes',
        text: 'Por favor reclame unos chitos en la caja N° 1',
    })
}

function tarjetas_clientes() {
    let tarjetas = document.getElementById("tarjetas_usuarios")
    tarjetas.innerHTML += '<div class="card text-center " style="width: 12rem;"> <img src="../img/vanessa.png" class="card-img-top" <div class="card-body"> <h5 class="card-title"> ' + clientes[7] + ' </h5> <p class="card-text"> Sumas 45 compras este mes </p></div> </div>'
    tarjetas.innerHTML += '<div class="card text-center " style="width: 9.8rem;"> <img src="../img/luis.png" class="card-img-top" <div class="card-body"> <h5 class="card-title"> ' + clientes[4] + ' </h5> <p class="card-text"> Sumas 41 compras este mes </p></div> </div>'
    tarjetas.innerHTML += '<div class="card text-center " style="width: 15rem;"> <img src="../img/Norma.png" class="card-img-top" <div class="card-body"> <h5 class="card-title"> ' + clientes[12] + ' </h5> <p class="card-text"> Sumas 27 compras este mes </p></div> </div>'
    tarjetas.innerHTML += '<div class="card text-center " style="width: 13rem;"> <img src="../img/Lusiano.png" class="card-img-top" <div class="card-body"> <h5 class="card-title"> ' + clientes[8] + ' </h5> <p class="card-text"> Sumas 11 compras este mes </p></div> </div>'
}

function cant_clientes() {
    let cantidad = clientes.length
    Swal.fire({
        icon: 'info',
        title: 'Total Clientes',
        text: 'Tienes un total de' + cantidad,
    })
}
clientes[8] = ("paco")

let clientesbet = ["max", "clara", "rosa"]

function clientes_betados() {
    let betados = document.getElementById("usuarios_betados")
    betados.innerHTML += '<div class="card text-center " style="width: 13rem;"><div class="card-body"> <h5 class="card-title"> ' + clientesbet + ' </h5> <p class="card-text"> Estos son los clientes betados </p></div> </div>'
}

let grantotal = clientes.concat(clientesbet);

function clientes_totales() {
    let totalreal = document.getElementById("total_general")
    totalreal.innerHTML = '<div class="card text-center " style="width: 13rem;"><div class="card-body"> <h5 class="card-title"> ' + grantotal.reverse() + ' </h5> <p class="card-text"> Estos son todos los clientes en el sistema </p></div> </div>'
}