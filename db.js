const precios = {
    "COSTO ALUMINIO": 20000,
    "PORCENTAJE AGREGADO AL MATERIAL": 1.8,
    "PORCENTAJE DE GANANCIA": 1,
    "VIDRIO m2 4mm": 30000,
    "PRECIO TELA MOSQUITERA": 6000,
    "POLIESTIRENO COMUN": 59000,
    "POLIESTIRENO GDE": 81500,
    "MOSQUIT ACC": 2000,
    "ACC MAMPARA": 5500,
    "VC ACC": 4000,
    "BISAGRAS MOD (C/U)": 3000,
    "BISAGRAS c/u": 2000,
    "PF MOD (escuadr + clips)": 2000,
    "PAS. EMBUTIR(2)": 3000,
    "CERRADURA MOD": 20000,
    "CERRADURA": 10000,
    "KIT ACC MODENA CORREDIZA": 20000,
};

const herreros = {
    "Marco 3H": 1.166,
    "Marco 901": 0.742,
    "Umbral Alto Trans.": 0.915,
    "Travesaño 44": 0.81,
    "Travesaño 902": 0.456,
    "Parante 903": 0.46,
    "Parante 904": 0.475,
    "Mosquitero 905": 0.34,
    "Mosquitero Trav.": 0.47,
    "TRAV. PF ANCHO": 0.96,
    "Paño Fijo Fino": 0.39,
    "Paño Fijo 907": 0.556,
    "Contravidrio": 0.168,
    "Marco Abrir Fino": 0.367,
    "Marco Abrir Ancho": 0.59,
    "Par. Raja 25mm fino": 0.45,
    "Par. P 25mm": 0.62,
    "Trav. P 25mm": 0.456,
    "Perfil Encuentro Abrir": 0.29,
    "Marco Abrir 36mm": 0.676,
    "Par. P 36mm": 0.96,
    "Trav. P 36mm": 1.05,
    "Marco 2 guias 61": 0.5,
    "Tablillas Celosia": 0.26 * (1/0.6),
    "Tablillas Rev. SIMPLE": 0.67 * (1/0.11),
    "Tablillas Rev. TUBULAR": 0.8 * (1/0.1),
    "Columna 75-75 Cuadrada": 1.453,
    "Columna Curva 75-75": 1.249,
    "Acople (unionero)75mm": 0.45,
    "Acople (unionero)35mm": 0.30,  // Faltava um valor para esta entrada
    "Mosquitero a30": 0.6
};


const modenas = {
    "Marco Umb 2G": 1.21,
    "MARCO Umb 3G": 1.82,
    "MARCO Umb 4G": null, // Adicione o valor apropriado se estiver faltando
    "Parante lat": 0.64,
    "Parante Cent.": 0.58,
    "Trav. Fino": 0.64,
    "Trav. Balcon": 1.26,
    "Marco Jamba 2H": 0.6,
    "Marco Jamba 3H": 0.95,
    "Marco Jamba 4H": null, // Adicione o valor apropriado se estiver faltando
    "Tope Mosquitero": 0.19,
    "Parante lat P/Dvh": 0.59,
    "Parante Cent. P/Dvh": 0.55,
    "Trav. Fino P/Dvh": 0.67,
    "Trav. Balcon P/DVH": 1.23,
    "Paño Fijo (216)": 0.66,
    "Contrav. CURVO": 0.24,
    "Contrav. RECTO": 0.3,
    "Hoja Raja Fina": 0.91,
    "Hoja Pta Mod.": 0.94,
    "Umbral Pta. Mod": 1.63,
    "Trav.  Pta. Mod": 1.03,
    "Tapa Junta mod.": 0.19,
    "Acople Union": 0.26,
    "Columna 45mm": 0.69,
    "Premarco": null, // Adicione o valor apropriado se estiver faltando
    "Guia cortina": 0.49
};

const mamparas = {
    "Jambas": 0.32,
    "CABEZAL": 0.82,
    "UMBRAL": 0.37,
    "HOJA": 0.36,
    "B. TOALLERA": 0.25
};

export {precios, mamparas, modenas, herreros}