function realizarBusqueda() {
    const terminoBusqueda = document.getElementById("busqueda").value.toLowerCase();
    const tabla = document.getElementById("tablaJapan");
    const filas = tabla.getElementsByTagName("tr");
    let coincidencias = 0;

    for (let i = 1; i < filas.length; i++) {
        const celdas = filas[i].getElementsByTagName("td");
        let coincidenciaEncontrada = false;

        for (let j = 0; j < celdas.length; j++) {
            const textoCelda = celdas[j].textContent.toLowerCase();
            if (textoCelda.includes(terminoBusqueda)) {
                coincidenciaEncontrada = true;
                break;
            }
        }

        if (coincidenciaEncontrada) {
            filas[i].style.display = "";
            coincidencias++;
        } else {
            filas[i].style.display = "none";
        }
    }

    const resultadoBusqueda = document.getElementById("resultadoBusqueda");
    if (coincidencias > 0) {
        resultadoBusqueda.textContent = `Se encontraron ${coincidencias} coincidencias.`;
    } else {
        resultadoBusqueda.textContent = "No se encontraron coincidencias.";
    }
}