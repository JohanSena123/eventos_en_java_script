function agregarTarea() {
    const entradaTarea = document.getElementById("entradaTarea");
    const textoTarea = entradaTarea.value.trim();

    if (textoTarea === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const listaTareas = document.getElementById("listaTareas");
    const elementoTarea = document.createElement("li");

    const textoElemento = document.createElement("span");
    textoElemento.textContent = textoTarea;

    const botonTachar = document.createElement("button");
    botonTachar.textContent = "Tachar";
    botonTachar.classList.add("btn-tachar");
    botonTachar.onclick = () => {
        elementoTarea.classList.toggle("completada");
    };

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("btn-eliminar");
    botonEliminar.onclick = () => listaTareas.removeChild(elementoTarea);

    elementoTarea.appendChild(textoElemento);
    elementoTarea.appendChild(botonTachar);
    elementoTarea.appendChild(botonEliminar);
    listaTareas.appendChild(elementoTarea);

    entradaTarea.value = "";
}