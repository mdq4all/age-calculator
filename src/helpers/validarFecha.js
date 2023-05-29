import { differenceInCalendarYears, 
  differenceInCalendarMonths
} from 'date-fns';


//Esta funcion nos devuelve la cantidad de dias de un mes si tiene 30 o 31
export function validarFecha(year, month) {
    return new Date(parseInt(year), parseInt(month), 0).getDate();
  }

  //Esta funcion devuelve si la fecha ingresada esta en el futuro
 export function futureDate(year, month, day) {
    const fechaActual = new Date();
    const fechaComparar = new Date(year, month -1, day);
    
    return fechaComparar > fechaActual;
  }

 export function calcularEdad(fechaNacimiento) {

  const fechaActual = new Date();
  const fechaNac = new Date(fechaNacimiento);
  console.log(fechaNac)
  // Diferencia en años
  const diferenciaAnios = differenceInCalendarYears(fechaActual, fechaNac)-1;

  // Restamos los años de diferencia para obtener la fecha de cumpleaños en el año actual
  const fechaCumpleanios = new Date(fechaActual.getFullYear(), fechaNac.getMonth(), fechaNac.getDate());

  // Diferencia en meses
  let diferenciaMeses = differenceInCalendarMonths(fechaActual, fechaCumpleanios);
  if (diferenciaMeses < 0){
    diferenciaMeses = diferenciaMeses + 12 
  } 
  // Diferencia en días
  let diferenciaDias = fechaActual.getDate() -  fechaCumpleanios.getDate();

  if (diferenciaDias < 0){
    diferenciaDias = diferenciaDias + validarFecha(fechaNac.getFullYear(), fechaNac.getMonth()+1) 
  } 

  return { years: diferenciaAnios, months: diferenciaMeses, days: diferenciaDias };
}