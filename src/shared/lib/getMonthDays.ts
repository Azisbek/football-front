export function getMonthDays(year: number, month: number) {
  // Количество дней в текущем месяце
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // День недели для 1 числа месяца (0 = воскресенье, 6 = суббота)
  const startDay = new Date(year, month, 1).getDay();
  const normalizedStart = startDay === 0 ? 6 : startDay - 1;

  // Количество дней в предыдущем месяце
  const prevMonthDays = new Date(year, month, 0).getDate();

  const result: { day: number; current: boolean }[] = [];

  // Дни предыдущего месяца
  for (let i = normalizedStart - 1; i >= 0; i--) {
    result.push({
      day: prevMonthDays - i,
      current: false,
    });
  }

  // Дни текущего месяца
  for (let d = 1; d <= daysInMonth; d++) {
    result.push({
      day: d,
      current: true,
    });
  }

  // Дни следующего месяца, чтобы заполнить последнюю неделю
  const nextMonthDaysToAdd = (7 - (result.length % 7)) % 7;
  for (let i = 1; i <= nextMonthDaysToAdd; i++) {
    result.push({
      day: i,
      current: false,
    });
  }

  return result;
}
