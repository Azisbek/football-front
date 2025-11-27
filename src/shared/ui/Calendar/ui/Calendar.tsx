import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@/shared/assets/icons/ui/ArrowLeftIcon";
import { ArrowRightIcon } from "@/shared/assets/icons/ui/ArrowRightIcon";
import s from "./Calendar.module.scss";
import { getMonthDays } from "@/shared/lib/getMonthDays";

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

interface CalendarProps {
  setSelected: (year: number, month: number, day: number) => void;
}

export function Calendar({ setSelected }: CalendarProps) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const days = getMonthDays(year, month);

  useEffect(() => {
    setSelected(year, month, selectedDay);
  }, [year, month, selectedDay, setSelected]);

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
    const newDays = getMonthDays(
      month === 0 ? year - 1 : year,
      month === 0 ? 11 : month - 1,
    );
    if (selectedDay > newDays.length) setSelectedDay(newDays.length);
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
    const newDays = getMonthDays(
      month === 11 ? year + 1 : year,
      month === 11 ? 0 : month + 1,
    );
    if (selectedDay > newDays.length) setSelectedDay(newDays.length);
  };

  return (
    <div className={s.calendar}>
      <div className={s.calendarHeader}>
        <button onClick={handlePrev} className={s.btn}>
          <ArrowLeftIcon />
        </button>

        <p className={s.title}>
          {monthNames[month]} {year}
        </p>

        <button onClick={handleNext} className={s.btn}>
          <ArrowRightIcon />
        </button>
      </div>

      <hr className={s.hr} />

      <div className={s.weeks}>
        {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => (
          <p key={day} className={s.week}>
            {day}
          </p>
        ))}
      </div>

      <div className={s.days}>
        {days.map((d, i) => (
          <div
            key={i}
            className={
              d.current
                ? d.day === selectedDay
                  ? s.selectedDay
                  : s.day
                : s.inactive
            }
            onClick={() => d.current && setSelectedDay(d.day)}
          >
            {d.day}
          </div>
        ))}
      </div>
    </div>
  );
}
