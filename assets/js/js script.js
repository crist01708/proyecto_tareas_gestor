const formulario = document.getElementById("formulario");
const listaPendientes = document.getElementById("pendientes");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const input = document.getElementById("tarea");
    const texto = input.value.trim();

    // Validación
    if (texto === "") {
        alert("El campo no puede estar vacío");
        return;
    }

    // Crear tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarea");

    tarjeta.innerHTML = `
        <p>${texto}</p>
        <button class="completar">✔</button>
        <button class="eliminar">🗑</button>
    `;

    listaPendientes.appendChild(tarjeta);

    input.value = "";

    actualizarContadores();
});
const listaCompletadas = document.getElementById("completadas");

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("completar")) {
        const tarea = e.target.parentElement;
        listaCompletadas.appendChild(tarea);
        actualizarContadores();
    }
});
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("eliminar")) {
        e.target.parentElement.remove();
        actualizarContadores();
    }
});
function actualizarContadores() {
    const pendientes = document.getElementById("pendientes").children.length;
    const completadas = document.getElementById("completadas").children.length;

    document.getElementById("contadorPendientes").textContent = pendientes;
    document.getElementById("contadorCompletadas").textContent = completadas;
}
