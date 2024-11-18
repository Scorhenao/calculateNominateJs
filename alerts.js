function AlertaDeExito() {
    Swal.fire({
    title: "¡Formulario enviado!",
    text: "¡respuesta guardada exitosamente!",
    icon: "success",
    confirmButtonText: "Aceptar",
    timer: 5000,
    });
}

function Alerta(){
    Swal.fire({
        title: "¡No puedes dejar datos vacios!",
        text: "Porfavor rellena todos lo campos",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Cerrar"
    });
}
