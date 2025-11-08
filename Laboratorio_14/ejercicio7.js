function gradosARadianes(grados) {
    const radianes = grados * (Math.PI / 180);
    const seno = Math.sin(radianes);
    const coseno = Math.cos(radianes);
    console.log(`Radianes: ${radianes}`);
    console.log(`Seno: ${seno.toFixed(4)}`);
    console.log(`Coseno: ${coseno.toFixed(4)}`);
    return radianes;
}

function radianesAGrados(radianes) {
    const grados = radianes * (180 / Math.PI);
    console.log(`Grados: ${grados}°`);
    return grados;
}
gradosARadianes(90);
radianesAGrados(Math.PI);