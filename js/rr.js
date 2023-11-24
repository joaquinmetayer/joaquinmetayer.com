var submitted = false;
function submitForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Aquí puedes realizar cualquier acción adicional antes de enviar el formulario
    // ...

    // Envía el formulario
    document.getElementById("myForm").submit();

    // Resetea los valores del formulario
    document.getElementById("myForm").reset();

    // Muestra un nuevo texto al usuario
    alert("Formulario enviado. Gracias por tu registro!");
}