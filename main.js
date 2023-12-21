do {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    alert(`Hola ${nombre} ${apellido}`);
    alert("Valor de las Entradas: Platea 20.000 Cancha 30.000  Vip 50.000");
 
    let miDinero = Number(prompt("Con cuanto pagará"));
    let valorEntrada = Number(prompt("Ingrese valor a pagar"));
    function restar(miDinero, valorEntrada) {
        resultado = (miDinero - valorEntrada);
    }
    restar(miDinero, valorEntrada);

    alert(`Tu cambio es de: ${resultado}`);

    if (resultado < miDinero) {
        alert("Gracias por su Compra");
    }else {
        alert("Tienes dinero a favor");
    }add
}
while (confirm)("¿Desea donarlo?");