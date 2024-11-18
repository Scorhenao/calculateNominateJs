function validarInputsVacios(inputNombre, inputSeguro, inputEnfermedades, selectArl, inputSalario, inputHorasTrabajadas) {
    if (
        inputNombre.value.trim() === "" ||
        inputSeguro.value.trim() === "" ||
        inputEnfermedades.value.trim() === "" ||
        selectArl.value === "Seleccione su ARL" ||
        inputSalario.value.trim() === "" ||
        inputHorasTrabajadas.value.trim() === ""
    ) {
        return false;
    }
    return true;
}