
let nombre = prompt ("¡Bienvenido a Aerolineas CoderHouse! ¿Podrias decirme tu nombre?")
alert ( "Hola, " + nombre + ". ¡Gracias por elegirnos!")
confirm ("Esta es nuestra lista de paises a los que viajamos año tras año. ¡Buen viaje "+ nombre + "!")

let pais = prompt ("Seleccione el destino: URUGUAY / BRASIL / PARAGUAY / PERU -para salir escriba VIAJAR-").toLowerCase()

while ( pais != "viajar"){

    switch (pais) {
        case "uruguay":
            alert ("¡Hermoso pais el uruguayo " + nombre + "! El costo para viajar a Uruguay es de USD 500")
            break
        case "brasil":
            alert ("¡Voce tein que falar portuges, " + nombre + "! El costo para viajar a Brasil es de USD 700")
            break
        case "paraguay":
            alert ("¡Tierras paraguayas, lo disfrutaras " + nombre + "! El costo para viajar a Paraguay es de USD 800")
            break
        case "peru":
            alert ("¡Aires incaicos y las alturas peruanas te sorprenderan, " + nombre + "! El costo para viajar a Peru es de USD 1000")
            break
        default:
            alert ("Destino invalido.")
    }
    
    pais = prompt ("Seleccione el destino: URUGUAY / BRASIL / PARAGUAY / PERU -para salir escriba VIAJAR-").toLowerCase()
}

let destino = prompt ("Confirmar destino: URUGUAY / BRASIL / PARAGUAY / PERU ").toUpperCase()

let costo = 0

while (destino != "URUGUAY" && destino != "BRASIL" && destino != "PARAGUAY" && destino != "PERU"){

    switch (destino) {
        case "URUGUAY":
            costo = 500
        break
        case "BRASIL":
            costo = 700
        break
        case "PARAGUAY":
            costo = 800
        break
        case "PERU":
            costo = 1000
        break
        default:
            alert ("Destino invalido.")
    }

    destino = prompt ("Confirmar destino: URUGUAY / BRASIL / PARAGUAY / PERU ").toUpperCase()
}

if (destino == "URUGUAY") {
    costo = 500
    } else if (destino == "BRASIL"){
    costo = 700
    } else if (destino == "PARAGUAY"){
    costo = 800
    } else if (destino == "PERU"){
    costo = 1000 }

let mes = prompt ("¿Cual es el MES del año que deseas viajar " + nombre + "?").toLowerCase()
let anio = prompt ("¿Para el año 2022 o para el 2023")
alert("¡Buenas noticias! ¡Tenemos plazas disponibles " + nombre + "!")
let pago = prompt("¿Con cuanto vas a pagar?")

while (pago < costo) {
    alert ( "El pago es insuficiente!")
    pago = prompt("¿Con cuanto vas a pagar?")
}

let vuelto = pago - costo
alert ("¡Su pasaje a " + destino.toUpperCase() + ", esta reservado! Su vuelto es de USD " + vuelto + ".")
alert ("Generando viaje. Imprimiendo...")
document.write ("Aerolineas CoderHouse 2022 <br> Pasaje nro: 182636" + "<br><br>" + "Deja en constancia al dia de hoy que nuestr@ pasajer@: <br>" + nombre.toUpperCase() + " viajara a " + destino + ", para el mes de " + mes + " del año " + anio + ".<br><br>" + "Costo del pasaje: USD " + costo + "<br>" + "Pagó: USD " + pago + "<br>" + "Cambio: USD " + vuelto + "<br><br><br><br>" + "Esperemos que disfrute de su viaje!") 