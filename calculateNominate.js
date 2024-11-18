function calculateNominate(empleado) {
    let salarioBase = parseFloat(empleado.Salario); // cambiamos de int a tipo decimal
    let horasTrabajadas = parseFloat(empleado.HorasTrabajadas);  // cambiamos de int a tipo decimal
    let horasExtraDia = parseFloat(empleado.HorasExtraTrabajadasDeDia) || 0;  // cambiamos de int a tipo decimal
    let horasExtraNoche = parseFloat(empleado.HorasExtraTrabajadasDeNoche) || 0;  // cambiamos de int a tipo decimal

    // Calcular valor por hora ordinaria
    let valorHoraOrdinaria = Math.floor(salarioBase / horasTrabajadas);

    // Calcular valor por hora extra diurna (25% adicional)
    let valorHoraExtraDia = valorHoraOrdinaria * 1.25;

    // Calcular valor por hora extra nocturna (75% adicional)
    let valorHoraExtraNoche = valorHoraOrdinaria * 1.75;

    // Calcular total por horas extra trabajadas
    let totalHorasExtraDia = horasExtraDia * valorHoraExtraDia;
    let totalHorasExtraNoche = horasExtraNoche * valorHoraExtraNoche;

    // Calcular total de la nómina
    let totalNomina = salarioBase + totalHorasExtraDia + totalHorasExtraNoche;

    // Devolver el resultado
    return {
        valorHoraOrdinaria,
        totalHorasExtraDia,
        totalHorasExtraNoche,
        totalNomina,
    };
}
