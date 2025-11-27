import { Button } from "@/shared/ui/Button";
import { RangeSlider } from "@/shared/ui/RangeSlider";
import s from "./CashSlider.module.scss";
import { useState } from "react";
import { CashIcon } from "@/shared/assets/icons/ui/CashIcon";
import { SearchIcon } from "@/shared/assets/icons/ui/SearchIcon";
import clsx from "clsx";

interface CashSliderProps {
  className?: string;
}

export function CashSlider({ className }: CashSliderProps) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2000);

  return (
    <div className={clsx(s.cashSlider, className)}>
      <CashIcon size={24} />

      <div className={s.container}>
        <div className={s.cashHeader}>
          <p className={s.titleCash}>Цена</p>

          <span className={s.valueCash}>
            {minValue}c - {maxValue}c
          </span>
        </div>

        <RangeSlider
          min={0}
          max={2000}
          start={minValue}
          end={maxValue}
          setStart={setMinValue}
          setEnd={setMaxValue}
        />
      </div>

      <Button variant="primary" className={s.btn}>
        <SearchIcon color="white" /> Поиск
      </Button>
    </div>
  );
}
