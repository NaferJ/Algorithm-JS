const readline = require('readline');

//leer datos desde la línea de comandos.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la fecha inicial (formato: mes/día/año): ', (fechaInicial) => {
  rl.question('Ingresa la fecha final (formato: mes/día/año): ', (fechaFinal) => {
    rl.question('Ingresa el valor total: ', (valorTotal) => {
      calcularPorcentaje(fechaInicial, fechaFinal, parseInt(valorTotal));
      rl.close();
    });
  });
});

function calcularPorcentaje(fechaInicial, fechaFinal, valorTotal) {
  var fechaInicio = new Date(fechaInicial);
  var fechaFin = new Date(fechaFinal);

  var anio = fechaInicio.getFullYear();
  // === significa operador de igualdad
  // !== significa operador de desigualdad
  // || significa verdadero o falso
  var esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;

  //getFullYear() devuelve el año en su formato de cuato digitos para las fechas.
  //getMonth() devuelve el mes del objeto Date según la hora local.
  var mesesTotales = (fechaFin.getFullYear() - fechaInicio.getFullYear()) * 12;
  mesesTotales -= fechaInicio.getMonth();
  mesesTotales += fechaFin.getMonth();

  var porcentajePorMes = valorTotal / mesesTotales;

  console.log("Fecha inicial:", fechaInicio.toDateString());
  console.log("Fecha final:", fechaFin.toDateString());
  console.log("Año bisiesto:", esBisiesto);
  console.log("Meses totales:", mesesTotales);
  console.log("Porcentaje por mes:", porcentajePorMes);
}