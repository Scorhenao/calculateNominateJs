let TodosLosEmpleadosGuardados = localStorage.getItem("Empleados");

if (TodosLosEmpleadosGuardados) {
    TodosLosEmpleadosGuardados = JSON.parse(TodosLosEmpleadosGuardados);
} else {
    TodosLosEmpleadosGuardados = []; // Inicializar como un array vacío
    alert("¡NO HAY EMPLEADOS GUARDADOS HP!");
}

// formatear moneda a pesos colombianos 
const formatter = new Intl.NumberFormat('es-CO', {
    currency: 'COP',
});

function mostrarEmpleados() {
    TodosLosEmpleadosGuardados.forEach(empleado => {

        let contenedorDeCardsDeEmpleados = document.getElementById("contenedorDeCardsDeEmpleados");


        nombre = empleado.Nombre;
        seguro = empleado.Seguro;
        enfermedades = empleado.Enfermedades;
        arl = empleado.ARL;
        salario = empleado.Salario;
        horasTrabajadas = empleado.HorasTrabajadas;
        horasExtraTrabajadasDeDia = empleado.HorasExtraTrabajadasDeDia;
        horasExtraTrabajadasDeNoche = empleado.HorasExtraTrabajadasDeNoche;
        cabezaFamilia = empleado.CabezaFamilia;

        // convertir boolean a string
        if (cabezaFamilia == true) {
            cabezaFamilia = "Si";
        } else {
            cabezaFamilia = "No";
        }

        // calculateNominate(empleado);
        let nomina = calculateNominate(empleado);

        // crear card por cada empleado
        let cardEmpleado = innerHtml = `
        <div class="card text-center mb-5" id="cardDeEmpleado" style="width: 50%;">
            <!-- Imagen de empleado -->
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEIMyG8RRFZ7fqoANeSGL6uYoJug8PiXIKg&s" class="card-img-top" id="ImagenDeEmpleado" alt="Imagen de empleado">
            <!-- Informacion de empleado -->
            <div class="card-body" id="InformacionDeEmpleado">
                <!-- Nombre del empleado -->
                <p class="card-title text-center"><b>NOMBRE: </b>${nombre}</p>

                <!-- Seguro del empleado -->
                <p class="card-text"><b>SEGURO: </b>${seguro}</p>

                <!-- Enfermedades del empleado -->
                <p class="card-text"><b>ENFERMEDADES: </b>${enfermedades}</p>

                <!-- ARL del empleado -->
                <p class="card-text"><b>ARL: </b>${arl}</p>

                <!-- Valor de hora ordinaria del empleado -->
                <p class="card-text"><b>valor de hora ordinaria: </b>${formatter.format(nomina.valorHoraOrdinaria)}</p>

                <!-- Total por horas extra trabajadas diurnas del empleado -->
                <p class="card-text"><b>Total por horas extra trabajadas diurnas: </b>${formatter.format(nomina.totalHorasExtraDia)}</p>
                
                <!-- Total por horas extra trabajadas nocturnas del empleado -->
                <p class="card-text"><b>Total por horas extra trabajadas nocturnas: </b>${formatter.format(nomina.totalHorasExtraNoche)}</p>
                
                <!-- Salario del empleado -->
                <p class="card-text"><b>Salario: </b>${formatter.format(salario)}</p>
                
                <!-- Total de la nómina -->
                <p class="card-text"><b>Total de la nómina: </b>${formatter.format(nomina.totalNomina)}</p>
                
                <!-- horas trabajadas -->
                <p class="card-text"><b>Horas trabajadas: </b>${horasTrabajadas}</p>
                
                <!-- Horas extra trabajadas de dia del empleado -->
                <p class="card-text"><b>Horas extra trabajadas de dia: </b>${horasExtraTrabajadasDeDia}</p>

                <!-- Horas extra trabajadas de noche del empleado -->
                <p class="card-text"><b>Horas extra trabajadas de noche: </b>${horasExtraTrabajadasDeNoche}</p>

                <!-- Cabeza de familia -->
                <p class="card-text"><b>Cabeza de familia: </b>${cabezaFamilia}</p>
            </div>
        </div>
        `;

        contenedorDeCardsDeEmpleados.innerHTML += cardEmpleado;
    });
}mostrarEmpleados();