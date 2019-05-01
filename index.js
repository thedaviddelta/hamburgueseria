let current = 0;

let mesas = [];
for (let i = 0; i < 8; i++) {
    mesas[i] = {
        "vegaburguer": 0,
        "burguedeverdad": 0,
        "colavega": 0,
        "fantavega": 0
    }
}

function mesa(index){
    document.getElementById("target").innerHTML = `Mesa ${index}`;
    current = index - 1;

    document.getElementById("vegaburguer").value = mesas[current].vegaburguer;
    document.getElementById("burguedeverdad").value = mesas[current].burguedeverdad;
    document.getElementById("colavega").value = mesas[current].colavega;
    document.getElementById("fantavega").value = mesas[current].fantavega;

    document.getElementById("main").classList.add("cont-hidden");
    document.getElementById("pedido").classList.remove("cont-hidden");
}

function aceptar() {
    mesas[current].vegaburguer = +document.getElementById("vegaburguer").value;
    mesas[current].burguedeverdad = +document.getElementById("burguedeverdad").value;
    mesas[current].colavega = +document.getElementById("colavega").value;
    mesas[current].fantavega = +document.getElementById("fantavega").value;

    document.getElementById("pedido").classList.add("cont-hidden");
    document.getElementById("main").classList.remove("cont-hidden");
}

function print() {
    let vCant = +document.getElementById("vegaburguer").value;
    let bCant = +document.getElementById("burguedeverdad").value;
    let cCant = +document.getElementById("colavega").value;
    let fCant = +document.getElementById("fantavega").value;

    let rec = `Mesa ${current + 1}:`;
    // Chrome no admite '\t'
    if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)){
        rec = rec.concat(`\nUds.     Producto         Precio    Importe\n--------------------------------------------\n`);
        if (vCant > 0)
            rec = rec.concat(`  ${vCant}        Vegaburg.          3.0€           ${vCant * 3}€\n`);
        if (bCant > 0)
            rec = rec.concat(`  ${bCant}        Burguedev.        3.5€        ${bCant * 3.5}€\n`);
        if (cCant > 0)
            rec = rec.concat(`  ${cCant}        Colavega           1.0€           ${cCant * 1}€\n`);
        if (fCant > 0)
            rec = rec.concat(`  ${fCant}        Fantavega          1.0€           ${fCant * 1}€\n`);
        rec = rec.concat(`--------------------------------------------\n                                      TOTAL       ${vCant * 3 + bCant * 3.5 + cCant * 1 + fCant * 1}€`);
    } else {
        rec = rec.concat(`\r\nUds.\tProducto\tPrecio\tImporte\r\n----------------------------------------------------\r\n`);
        if (vCant > 0)
            rec = rec.concat(`${vCant}\t\tVegaburg.\t3.0€\t${vCant * 3}€\r\n`);
        if (bCant > 0)
            rec = rec.concat(`${bCant}\t\tBurguedev.\t3.5€\t${bCant * 3.5}€\r\n`);
        if (cCant > 0)
            rec = rec.concat(`${cCant}\t\tColavega\t1.0€\t${cCant * 1}€\r\n`);
        if (fCant > 0)
            rec = rec.concat(`${fCant}\t\tFantavega\t1.0€\t${fCant * 1}€\r\n`);
        rec = rec.concat(`----------------------------------------------------\r\n\t\t\t\t\tTOTAL\t${vCant * 3 + bCant * 3.5 + cCant * 1 + fCant * 1}€`);
    }
    window.alert(rec);

    mesas[current].vegaburguer = 0;
    mesas[current].burguedeverdad = 0;
    mesas[current].colavega = 0;
    mesas[current].fantavega = 0;

    document.getElementById("pedido").classList.add("cont-hidden");
    document.getElementById("main").classList.remove("cont-hidden");
}