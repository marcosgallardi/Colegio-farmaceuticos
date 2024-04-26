export class dateFunction {
  currentDate = new Date();
  week = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  mounths = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  currentDay = this.currentDate.getDate();
  currentWeek = this.week[this.currentDate.getDay()];
  currentMounth = this.mounths[this.currentDate.getMonth()];
  currentYear = this.currentDate.getFullYear();

  formatDate =
    this.currentWeek.toLocaleUpperCase() +
    ' ' +
    this.currentDay +
    ' DE ' +
    this.currentMounth.toUpperCase() +
    '\n DE ' +
    this.currentYear;
}
