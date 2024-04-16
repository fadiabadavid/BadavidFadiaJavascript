//Solicitar valores de simulación

const TipoVehiculo = parseInt(prompt("Qué tipo de vehículo quieres? \n\n1.Carro\n2.Moto"));
if (TipoVehiculo == 1) {
    let ValorCarro = parseFloat(prompt("Cuánto es el valor aproximado del carro?\nIngrese el valor en pesos Colombianos"));
    let CuotaInicialCarro = parseFloat(prompt("Ingresa tu cuota inicial\nIngrese el valor en pesos Colombianos"));
    let MesesCarro = parseInt(prompt("¿A cuántos meses quieres pagar? \n\n.12\n.24\n36"));
    CalcularCuotaCarro(ValorCarro, CuotaInicialCarro, MesesCarro);
    ElegirTipoVehiculo(1, ValorCarro, CuotaInicialCarro, MesesCarro);
} else if (TipoVehiculo == 2) {
    let ValorMoto = parseFloat(prompt("Cuánto es el valor aproximado de la moto?\nIngrese el valor en pesos Colombianos"));
    let CuotaInicialMoto = parseFloat(prompt("Ingresa tu cuota inicial\nIngrese el valor en pesos Colombianos"));
    let MesesMoto = parseFloat(prompt("¿A cuántos meses quieres pagar? \n\n1).12\n2).24\n3).36"));
    ElegirTipoVehiculo(2);
} else {
    alert("No ingresaste un valor correcto")
}
//funcion para calcular cuota carro
function CalcularCuotaCarro(ValorCarro, CuotaInicialCarro, MesesCarro) {
    let MontoFinanciado = ValorCarro - CuotaInicialCarro;
    let CuotaMensual = MontoFinanciado / MesesCarro;
    return CuotaMensual
}

//funcion para calcular cuota Moto
function CalcularCuotaMoto(ValorMoto, CuotaInicialMoto, MesesMoto) {
    let MontoFinanciado = ValorMoto - CuotaInicialMoto;
    let CuotaMensual = MontoFinanciado / MesesMoto;

    return CuotaMensual
}

//funcion de menu inicial

function ElegirTipoVehiculo(TipoVehiculo, ValorCarro, CuotaInicialCarro, MesesCarro) {
    switch (TipoVehiculo) {
        case 1:

            let CuotaMensual = CalcularCuotaCarro(ValorCarro, CuotaInicialCarro, MesesCarro);
            let ValorPesos = CuotaMensual.toLocaleString('es-CO')

            console.log("Cuota mensual aproximada que pagarías: " + ValorPesos + " pesos, El monto aprobado y la tasa dependerán de tu información financiera y nuestro análisis crediticio.");
            break;
        case 2:
            CalcularCuotaMoto();
            console.log("tu cuota mensual es de")
            break;
        default:
            console.log("opcion no valida")

    }
}








