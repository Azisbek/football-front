import { useCallback, useState } from "react";

export function useFilterOptions() {
  const [region, setRegion] = useState("Не выбрано");
  const [city, setCity] = useState("Не выбрано");

  const [dateFrom, setDateFrom] = useState({ year: 2025, month: 0, day: 1 });
  const [dateTo, setDateTo] = useState({ year: 2025, month: 0, day: 1 });

  const handleSetDateFrom = useCallback(
    (year: number, month: number, day: number) => {
      setDateFrom({ year, month, day });
    },
    [],
  );

  const handleSetDateTo = useCallback(
    (year: number, month: number, day: number) => {
      setDateTo({ year, month, day });
    },
    [],
  );

  return {
    region,
    city,
    setRegion,
    setCity,
    dateFrom,
    dateTo,
    setDateFrom: handleSetDateFrom,
    setDateTo: handleSetDateTo,
  };
}
