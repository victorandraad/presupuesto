import { modenas, precios, mamparas, herreros } from "./db.js"

var resumen = document.querySelector(".resumen")

function start(){
    var mosquitero = document.querySelector("#mosquitero")
    var mosquiteroA30 = document.querySelector("#mosquiteroA30")

    var altura = Number(document.querySelector("#altura").value)
    var ancho = Number(document.querySelector("#ancho").value)

    var calcMosquitero = (altura * 2 + ancho * 2) * precios['COSTO ALUMINIO'] * herreros['Mosquitero 905'] * precios['PORCENTAJE AGREGADO AL MATERIAL'] + precios['MOSQUIT ACC'] + ancho * altura * precios["PRECIO TELA MOSQUITERA"]*2*1.4 
    var calcMosquiteroA30 = (altura * 2 + ancho * 2) * precios['COSTO ALUMINIO'] * herreros['Mosquitero a30'] * precios['PORCENTAJE AGREGADO AL MATERIAL'] + precios['MOSQUIT ACC'] + ancho * altura * precios["PRECIO TELA MOSQUITERA"]*2*1.4 
    
    mosquitero.innerHTML = (Math.ceil(Number(calcMosquitero)/100) * 100).toLocaleString("es-AR", { style: "currency", currency: "ARS"})
    mosquiteroA30.innerHTML = (Math.ceil(Number(calcMosquiteroA30)/100) * 100).toLocaleString("es-AR", { style: "currency", currency: "ARS"})
    ventanaCorrediza(altura, ancho)

}

start()

document.querySelector("#submit").addEventListener("click", function(){
    var mosquitero = document.querySelector("#mosquitero")
    var mosquiteroA30 = document.querySelector("#mosquiteroA30")

    var altura = Number(document.querySelector("#altura").value)
    var ancho = Number(document.querySelector("#ancho").value)

    if(altura < 0 || ancho < 0){
        alert("Ancho y Altura deben ser mayor que 0")
        document.querySelector("#altura").value = 1
        document.querySelector("#ancho").value = 1
    }
    else{
        var calcMosquitero = (altura * 2 + ancho * 2) * precios['COSTO ALUMINIO'] * herreros['Mosquitero 905'] * precios['PORCENTAJE AGREGADO AL MATERIAL'] + precios['MOSQUIT ACC'] + ancho * altura * precios["PRECIO TELA MOSQUITERA"]*2*1.4 
        var calcMosquiteroA30 = (altura * 2 + ancho * 2) * precios['COSTO ALUMINIO'] * herreros['Mosquitero a30'] * precios['PORCENTAJE AGREGADO AL MATERIAL'] + precios['MOSQUIT ACC'] + ancho * altura * precios["PRECIO TELA MOSQUITERA"]*2*1.4 
    
        mosquitero.innerHTML = (Math.ceil(Number(calcMosquitero)/100) * 100).toLocaleString("es-AR", { style: "currency", currency: "ARS"})
        mosquiteroA30.innerHTML = (Math.ceil(Number(calcMosquiteroA30)/100) * 100).toLocaleString("es-AR", { style: "currency", currency: "ARS"})
        ventanaCorrediza(altura, ancho)
    }
})

document.querySelector("#th1").addEventListener("click", function(){
    ordenarTabela(1, Number(altura.value), Number(ancho.value))
})

document.querySelector("#th2").addEventListener("click", function(){
    ordenarTabela(2, Number(altura.value), Number(ancho.value))
})

document.querySelector("#th3").addEventListener("click", function(){
    ordenarTabela(3, Number(altura.value), Number(ancho.value))
})

document.querySelector("#th4").addEventListener("click", function(){
    ordenarTabela(4, Number(altura.value), Number(ancho.value))
})

function ordenarTabela(n, h, w){
    switch(n){
        case 1:
            ventanaCorrediza(h, w)
            break
        case 2:
            rajasPuertasHerrrero(h, w)
            break
        case 3:
            ventanasCorredizaModena(h, w)
            break
        case 4:
            rajaPuertaModena(h, w)
            break
    }
}

// deja bien el css
function styleFix(n){
    for(let c = 1; c < 5; c++){
        if(c != n){
            document.querySelector(`#th${c}`).style.color = "black"
            document.querySelector(`#th${c}`).style.background = "white"
        }
    }

    document.querySelector(`#th${n}`).style.color = "white"
    document.querySelector(`#th${n}`).style.background = "rgb(46, 46, 90)"
}


function ventanaCorrediza(altura, ancho){
    styleFix(1)
    resetTable()

    var marco3h = (ancho*2 + altura *2) * herreros["Marco 3H"] * precios["COSTO ALUMINIO"]
    var marco901 = (ancho*2 + altura *2) * herreros["Marco 901"] * precios["COSTO ALUMINIO"]
    var umbralAltoTrans = (ancho - 0.4) * herreros["Umbral Alto Trans."] * precios["COSTO ALUMINIO"]
    var travesano44 = ancho * herreros["Travesaño 44"] * precios["COSTO ALUMINIO"]
    var travesano902 = ancho * 2 * herreros["Travesaño 902"] * precios["COSTO ALUMINIO"]
    var parante903 = (altura - 0.065) * 2 * herreros["Parante 903"] * precios["COSTO ALUMINIO"]
    var parante904 = (altura - 0.065) * 2 * herreros["Parante 904"] * precios["COSTO ALUMINIO"]
    var mosquitero905 = ((ancho/2-0.02) * 2 + (altura - 0.075) * 2 )* herreros["Mosquitero 905"] * precios["COSTO ALUMINIO"]
    var telaMosquitera = ancho / 2 * altura * precios["PRECIO TELA MOSQUITERA"]
    var marco2GuiasFino = (ancho * 2 + altura * 2) * herreros["Marco 2 guias 61"] * precios["COSTO ALUMINIO"]
    var tabCelosia = ancho * altura * herreros["Tablillas Celosia"] * precios["COSTO ALUMINIO"]
    var tabRevSimple = ancho * altura * herreros["Tablillas Rev. SIMPLE"] * precios["COSTO ALUMINIO"]
    var tabRevTub = ancho * altura * herreros["Tablillas Rev. TUBULAR"] * precios["COSTO ALUMINIO"]

    
    var ventanaSolaSinVidrioYMosquitero = (marco901 + travesano902 + parante903 + parante904) * precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + precios["VC ACC"]
    var conVidrio = ventanaSolaSinVidrioYMosquitero + ancho * altura * precios["VIDRIO m2 4mm"]
    var mosquiteroSolo = mosquitero905 * precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + (telaMosquitera * 2 * 1.4) + precios["MOSQUIT ACC"]
    var conVidrioyMosquitero =  conVidrio+mosquiteroSolo
    var opcion3Hojas = (marco3h+travesano902+(parante903*2)+parante904)*precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + ancho * altura * precios["VIDRIO m2 4mm"] + precios["VC ACC"]
    var opcion4Hojas = (marco901+travesano902+parante903*2+parante904*2)*precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + ancho * altura * precios["VIDRIO m2 4mm"] + precios["VC ACC"]

    //var opcionMarco2Guias = 

    var opcionTableroCelosia = (marco2GuiasFino + travesano902 + parante903 + parante904 + telaMosquitera) * precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + precios["VC ACC"]
    var opcionTableroRevSimple = (marco2GuiasFino + travesano902 + parante903 + parante904 +tabRevSimple) * precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + precios["VC ACC"]
    var opcionTableroRevTub = (marco2GuiasFino + travesano902 + parante903 + parante904 + tabRevTub) * precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + precios["VC ACC"]
    var opcionZocaloAlto = travesano902 / 4 * precios["PORCENTAJE AGREGADO AL MATERIAL"]
    var balconConTravYUmbral = ((ancho+altura*2*herreros["Marco 901"]+((ancho-0.4)*herreros["Umbral Alto Trans."]))*precios["COSTO ALUMINIO"] + travesano902 + parante903 + parante904 + (travesano902/2)) * precios["PORCENTAJE AGREGADO AL MATERIAL"] * precios["PORCENTAJE DE GANANCIA"] + (ancho * altura * precios["VIDRIO m2 4mm"]) + precios["VC ACC"]
    var conGuiaCortina = (modenas["Guia cortina"]*altura*2)*precios["COSTO ALUMINIO"]*1.6

    var finalPricelist = []

    // al agregar valor a opcionMarco2Guias no olvides de agregarlo aqui
    finalPricelist.push(
        ventanaSolaSinVidrioYMosquitero,
        conVidrio,
        mosquiteroSolo,
        conVidrioyMosquitero, 
        opcion3Hojas, 
        opcion4Hojas,
        //opcionMarco2Guias,
        opcionTableroCelosia, 
        opcionTableroRevSimple, 
        opcionTableroRevTub, 
        opcionZocaloAlto, 
        balconConTravYUmbral, 
        conGuiaCortina)

    var nombresList = [
        'Ventana SOLA S/V/M',
        'C/ Vidrio',
        'Mosquitero Solo',
        'C/Vidrio y Mosquitero',
        'Opc 3H',
        'Opc 4H',
        // 'Opc marco 2 guias',
        'Opc Tablero Celosia',
        'Opc Tablero rev simple',
        'Opc Tablero Rev tub.',
        'Opc Zocalo Alto (solo abajo)',
        'Balcon C/ trav. Y umbral',
        'c/guia cortina'
    ]

    var tabela = document.querySelector("#tabela")

    for(let c = 0; c < nombresList.length; c++){
        let row = document.createElement("tr")
        let data1 = document.createElement("td")
        let data2 = document.createElement("td")
        let data3 = document.createElement("td")
        let data4 = document.createElement("td")
        data1.innerHTML = `${nombresList[c]}`
        data2.innerHTML = `${(Math.ceil(finalPricelist[c]/100)*100).toLocaleString("es-AR", { style: "currency", currency: "ARS"})}`
        data3.innerHTML = `<input type="number" id="value_${c}">`
        data4.innerHTML = `<button class="agregadores" type="button" id="pos_${c}">+</button>`
        row.appendChild(data1)
        row.appendChild(data2)
        row.appendChild(data3)
        row.appendChild(data4)
        tabela.appendChild(row)

        document.querySelector(`#pos_${c}`).addEventListener("click", function(){
            let inputValue = Math.trunc(document.querySelector(`#value_${c}`).value)
            if(inputValue>0){
                let precioFinal = Math.ceil(finalPricelist[c] * inputValue / 100) * 100
                resumen.innerHTML += `${document.querySelector(`#value_${c}`).value}x ${nombresList[c]} ${altura}*${ancho}cm sale ${precioFinal.toLocaleString("es-AR", { style: "currency", currency: "ARS"})}<br>`
            }
            else{
                alert("La cantidad debe ser mayor que 0 y debe ser un numero entero")
            }
        })
    }

}

function rajasPuertasHerrrero(altura, ancho){
    styleFix(2)
    resetTable()

}

function ventanasCorredizaModena(altura, ancho){
    styleFix(3)
    resetTable()

}

function rajaPuertaModena(altura, ancho){
    styleFix(4)
    resetTable()
}

function resetTable(){
    var tabela = document.querySelector("#tabela")
    if(tabela.rows.length > 1){
        while(tabela.rows.length > 1){
            tabela.deleteRow(1)
        }
    }
}
