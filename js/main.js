//Array de vehiculos
const vehiculos = [
    {
        "usado": "true",
        "Nombre": "Patineta",

    },
    {
        "usado": "false",
        "Nombre": "Bicicleta",

    },
    {
        "usado": "true",
        "Nombre": "Bus",

    },
    {
        "usado": "false",
        "Nombre": "Patines",

    },


]

//funcion con oficinas del banco

const oficinas = [
    {
        "Pais": "colombia",
        "sede": "sedeCentro",
        "Telefono": "3333333"
    },
    {
        "Pais": "mexico",
        "Sede": "sedeCentro",
        "Telefono": "44444"
    },

    {
        "Pais": "argentina",
        "Sede": "sedeSur",
        "Telefono": "55555"
    },
]

//Funcion para agregar nuevos tipos de vehiculos a simular
function AgregarNuevoVehiculo() {
    const Nombre = prompt(`ingrese el nombre del nuevo vehiculo`)

    const NuevoVehiculo = {

        Nombre,

    };
    vehiculos.push(NuevoVehiculo);
    alert("agregaste a" + " " + Nombre + " " + "correctamente")
    console.log(vehiculos);
}
//Funcion para mostrar las oficinas- Disponibles   
function EncontrarOficinas() {
    const Nombre = prompt(`Escriba el Pais Deseado`)
    const Conversion = Nombre.toLowerCase();


    if (Nombre === "") {
        alert("No ingresaste ninguna oficina");
    } else if (oficinas.indexOf(Nombre) === -1) {
        console.log(Nombre + " no tiene oficinas activas");

    } else {
        let OficinaEncontrada = oficinas.find(oficina => oficina.Pais === Nombre);
        alert("Para el pais " + Nombre + "Se tiene el telefono" + OficinaEncontrada.Telefono);
    }


}

//Solicitar valores de simulación

let TipoVehiculo;

do {
    TipoVehiculo = parseFloat(prompt(`Selecciona el tipo de vehículo que quieres o 4 para estar mas cerca de tu credito? 
    1.Carro
    2.Moto
    3.Agregar mi vehiculo deseado
    4.Conocer Nuestras Oficinas`));
    if (isNaN(TipoVehiculo)) {
        alert("Por favor, ingrese un número válido.");
    }
} while (isNaN(TipoVehiculo));
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

} else if (TipoVehiculo == 3) {
    AgregarNuevoVehiculo();
    let Valor = parseFloat(prompt("Cuánto es el valor aproximado deL nuevo vehiculo?\nIngrese el valor en pesos Colombianos"));
    let CuotaInicial = parseFloat(prompt("Ingresa tu cuota inicial\nIngrese el valor en pesos Colombianos"));
    let Meses = parseFloat(prompt("¿A cuántos meses quieres pagar? \n\n.12\n.24\n.36"));

    CalcularCuotaCarro(Valor, CuotaInicial, Meses);
    ElegirTipoVehiculo(2, Valor, CuotaInicial, Meses);

} else if (TipoVehiculo == 4) {
    EncontrarOficinas();
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
        case 3:
            console.log("Gracias por confiar en nosotros")
            break;
        case 4:
            console.log("Gracias por confiar en nosotros, esperamos verte pronto")
        default:
            console.log("opcion no valida")

    }
}








