function gestionarEmpleados(empleados) {
  const gruposPorArea = {};

  empleados.forEach(empleado => {
    const area = empleado.area;
    const salario = empleado.salario;

    if (!gruposPorArea[area]) {
      gruposPorArea[area] = {
        nombres: [],
        sumaSalarios: 0,
        conteo: 0
      };
    }

    gruposPorArea[area].nombres.push(empleado.nombre);
    gruposPorArea[area].sumaSalarios += salario;
    gruposPorArea[area].conteo++;
  });

  const resultadoFinal = {};
  
  for (const area in gruposPorArea) {
    const data = gruposPorArea[area];
    const promedio = data.sumaSalarios / data.conteo;
    
    resultadoFinal[area] = {
      empleados: data.nombres,
      promedio: parseFloat(promedio.toFixed(2))
    };
  }

  return resultadoFinal;
}

const listaEmpleados = [
  { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
  { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
  { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
  { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

console.log(gestionarEmpleados(listaEmpleados));