document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("correo");
    const asuntoInput = document.getElementById("asunto");
    const mensajeInput = document.getElementById("mensaje");

    // Función para aplicar mensajes personalizados
    function aplicarValidaciones(input, mensaje) {
        input.addEventListener("invalid", function(event) {
            event.target.setCustomValidity(mensaje);
        });

        input.addEventListener("input", function(event) {
            event.target.setCustomValidity("");
        });
    }

    aplicarValidaciones(nombreInput, "Por favor, ingrese su nombre.");
    aplicarValidaciones(emailInput, "Por favor, ingrese un correo electrónico válido.");
    aplicarValidaciones(asuntoInput, "Por favor, ingrese el asunto del mensaje.");
    aplicarValidaciones(mensajeInput, "Por favor, escriba su mensaje.");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let nombre = nombreInput.value.trim();
        let email = emailInput.value.trim();
        let asunto = asuntoInput.value.trim();
        let mensaje = mensajeInput.value.trim();
        let errorMessage = "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nombre) errorMessage += "El nombre es obligatorio.\n";
        if (!email || !emailRegex.test(email)) errorMessage += "Debe ingresar un email válido.\n";
        if (!asunto) errorMessage += "Debe ingresar un asunto.\n";
        if (!mensaje) errorMessage += "Debe ingresar un mensaje.\n";

        if (errorMessage) {
            alert("Error en el formulario:\n" + errorMessage);
        } else {
            alert(`Gracias por su contacto, ${nombre}. \nEn breve le estaré respondiendo.`);
            form.reset();
        }
    });
});
