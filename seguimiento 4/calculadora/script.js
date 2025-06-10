const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let operacion = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            operacion = "";
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            operacion = operacion.slice(0, -1);
            pantalla.textContent = operacion || "0";
            return;
        }

        if (boton.id === "igual") {
            try {
                operacion = eval(operacion).toString();
            } catch {
                operacion = "Error";
            }
            pantalla.textContent = operacion;
            return;
        }

        // Para evitar escribir más de un punto seguido
        if (botonApretado === "." && pantalla.textContent.slice(-1) === ".") {
            return;
        }

        operacion += botonApretado;
        pantalla.textContent = operacion;
    });
});
