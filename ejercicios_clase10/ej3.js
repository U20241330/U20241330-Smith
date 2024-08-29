const date = new Date()
const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
     'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const currentMonth = monthNames[date.getMonth()]

console.log(`El mes actual es: ${currentMonth}`)