function normalizarCalificaciones(calificaciones) {
    const maximo = Math.max(...calificaciones);
    const calificacionesNormalizadas = calificaciones.map(nota => {
        return nota / maximo;
    });
    console.log(`Originales: ${calificaciones}`);
    console.log(`Máximo: ${maximo}`);
    console.log(`Normalizadas (rango 0-1): ${calificacionesNormalizadas.map(n => n.toFixed(2))}`);
    return calificacionesNormalizadas;
}
normalizarCalificaciones([10, 15, 20, 12, 5]);