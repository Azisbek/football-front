export function formatDate(date: { day: number; month: number; year: number }) {
  const d = String(date.day).padStart(2, "0");
  const m = String(date.month + 1).padStart(2, "0");
  return `${d}.${m}.${date.year}`;
}
