let promedio = prompt("Digite su promedio de calificación")
let mensaj = "El valor que debes pagar es de: "
var valor_matricula = 1000000

if (promedio < 3) {
    valor_matricula
    if (valor_matricula == 1000000) {
        alert("No aplicas para un descuento");
    }
} else if (promedio >= 3 && promedio <= 4) {
    valor_matricula = valor_matricula - (0.05 * valor_matricula)
    alert(mensaj + (valor_matricula))
} else if (promedio >= 4) {
    valor_matricula = valor_matricula - (0.50 * valor_matricula)
    alert(mensaj + (valor_matricula))
}