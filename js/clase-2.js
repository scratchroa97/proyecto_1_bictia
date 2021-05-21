
function esPrimo(n) {
    let max, d, r;
    max = Math.sqrt(n) + 1;

    if (n == 2) { return (-1); }
    if (n % 2 == 0) { return 2; }

    for (d = 3; d < max; d += 2) {
        if (n % d == 0) { return d; }
    }

    return (-1);
}

function comprobarPrimo() {
    let resultado = ''; let d;
    n1 = parseInt(d1.value);
    if (isNaN(n1)) {
        resultado = '¡¡ ERROR !!';
        rpta.style.color = '#a00';
    } else {
        if (n1 == 0 || n1 == 1) {
            resultado += 'No se considera primo ni compuesto.'
        } else {
            d = esPrimo(n1);
            resultado += (d == (-1)) ? 'Es Primo' : 'NO es Primo, es compuesto y divisible entre ' + d;
        }
        rpta.style.color = 'inherit';
    }

    rpta.innerHTML = resultado;
}

function total() {
    var numero1 = document.getElementById("numerouno").value
    var numero2 = document.getElementById("numerodos").value
    var resultado = parseInt(numero1) + parseInt(numero2)

    if (resultado > 5 && resultado < 029) {
        console.log(resultado)
        alert("el numero es grande")}

        else if (resultado >= 30) {
            alert("el numero es de 2 digitos")
        
        else{
            alert("el numero es muy pequeño")
        }
    }
}

