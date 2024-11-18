// Obtener empleados existentes del localStorage al iniciar
let TodosLosEmpleadosGuardados = localStorage.getItem("Empleados");
let Empleados = TodosLosEmpleadosGuardados ? JSON.parse(TodosLosEmpleadosGuardados) : []; // Cargar empleados existentes o iniciar vacío


const inputNombre = document.getElementById("Nombre");
const inputSeguro = document.getElementById("Seguro");
const inputEnfermedades = document.getElementById("Enfermedades");
let selectArl = document.getElementById("Arl");
const inputSalario = document.getElementById("Salario");
const inputHorasTrabajadas = document.getElementById("HorasTrabajadas");
const inputHorasExtraTrabajadasDeDia = document.getElementById("HorasExtraTrabajadasDeDia");
const inputHorasExtraTrabajadasDeNoche = document.getElementById("HorasExtraTrabajadasDeNoche");
let checkboxCabezaFamilia = document.getElementById("CabezaFamilia");
let Enviar = document.getElementById("Enviar");

Enviar.addEventListener("click", (e) => {
    e.preventDefault(); //evitar refrecar pantalla automaticamente al darle enviar
    let nombre = inputNombre.value;
    let seguro = inputSeguro.value;
    let enfermedades = inputEnfermedades.value;
    let arl = selectArl.value;
    let salario = inputSalario.value;
    let HorasTrabajadas = inputHorasTrabajadas.value;
    let HorasExtraTrabajadasDeDia = inputHorasExtraTrabajadasDeDia.value;
    let HorasExtraTrabajadasDeNoche = inputHorasExtraTrabajadasDeNoche.value;
    let cabezaFamilia = checkboxCabezaFamilia.checked;
    const data = {
        Nombre: nombre,
        Seguro: seguro,
        Enfermedades: enfermedades,
        ARL: arl,
        Salario: salario,
        HorasTrabajadas: HorasTrabajadas,
        HorasExtraTrabajadasDeDia: HorasExtraTrabajadasDeDia,
        HorasExtraTrabajadasDeNoche: HorasExtraTrabajadasDeNoche,
        CabezaFamilia: cabezaFamilia,
    }
    if (validarInputsVacios(inputNombre, inputSeguro, inputEnfermedades, selectArl, inputSalario, inputHorasTrabajadas) !== true) {
        Alerta();
    }
    else {
        AlertaDeExito();
    }
    Empleados.push(data);
    localStorage.setItem("Empleados", JSON.stringify(Empleados));
});