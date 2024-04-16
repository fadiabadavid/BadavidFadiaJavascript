//Solicitar valores de simulación

const TipoVehiculo = parseInt(prompt("Qué tipo de vehículo quieres? \n\n1.Carro\n2.Moto"));
if (TipoVehiculo == 1) {
    let Valor = parseFloat(prompt("Cuánto es el valor aproximado del carro?\nIngrese el valor en pesos Colombianos"));
    let CuotaInicial = parseFloat(prompt("Ingresa tu cuota inicial\nIngrese el valor en pesos Colombianos"));
    let Meses = parseInt(prompt("¿A cuántos meses quieres pagar? \n\n.12\n.24\n.36"));
    CalcularCuotaCarro(Valor, CuotaInicial, Meses);
    ElegirTipoVehiculo(1, Valor, CuotaInicial, Meses);
} else if (TipoVehiculo == 2) {
    let Valor = parseFloat(prompt("Cuánto es el valor aproximado de la moto?\nIngrese el valor en pesos Colombianos"));
    let CuotaInicial = parseFloat(prompt("Ingresa tu cuota inicial\nIngrese el valor en pesos Colombianos"));
    let Meses = parseFloat(prompt("¿A cuántos meses quieres pagar? \n\n.12\n.24\n.36"));
    CalcularCuotaCarro(Valor, CuotaInicial, Meses);
    ElegirTipoVehiculo(2, Valor, CuotaInicial, Meses);
    
} else {
    alert("No ingresaste un valor correcto")
}
//funcion para calcular cuota carro
function CalcularCuotaCarro(Valor, CuotaInicial, Meses) {
    let MontoFinanciado = Valor - CuotaInicial;
    let CuotaMensual = MontoFinanciado / Meses;
    return CuotaMensual
}

//funcion para calcular cuota Moto
function CalcularCuotaMoto(Valor, CuotaInicial, Meses) {
    let MontoFinanciado = Valor - CuotaInicial;
    let CuotaMensual = MontoFinanciado / Meses;

    return CuotaMensual
}

//funcion de menu inicial

function ElegirTipoVehiculo(TipoVehiculo, Valor, CuotaInicial, Meses) {
    switch (TipoVehiculo) {
        case 1:

            let CuotaMensual = CalcularCuotaCarro(Valor, CuotaInicial, Meses);
            let ValorPesos = CuotaMensual.toLocaleString('es-CO')

            console.log("Cuota mensual aproximada que pagarías: " + ValorPesos + " pesos, El monto aprobado y la tasa dependerán de tu información financiera y nuestro análisis crediticio.");
            break;
        case 2:
            let CuotaMensual2 = CalcularCuotaMoto(Valor, CuotaInicial, Meses);
            let ValorPesos2 = CuotaMensual2.toLocaleString('es-CO')

            console.log("Cuota mensual aproximada que pagarías: " + ValorPesos2 + " pesos, El monto aprobado y la tasa dependerán de tu información financiera y nuestro análisis crediticio.");
            break;
        default:
            console.log("opcion no valida")

    }
}








