function validarFormulario() {
        var mensaje = document.getElementById("el pepe").value.trim();

        if (mensaje === "") {
                return false; alert("Necesitas colocar una confesion");

        }
        else return true;
}