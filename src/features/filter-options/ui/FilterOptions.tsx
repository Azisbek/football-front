import { CashSlider } from "@/features/cash-slider";
import { FilterSelect } from "@/entities/filter-select";
import { CalendarIcon } from "@/shared/assets/icons/ui/CalendarIcon";
import { FlagIcon } from "@/shared/assets/icons/ui/FlagIcon";
import { GeoIcon } from "@/shared/assets/icons/ui/GeoIcon";
import { TimeIcon } from "@/shared/assets/icons/ui/TimeIcon";
import s from "./FilterOptions.module.scss";
import { Calendar } from "@/shared/ui/Calendar";
import { useFilterOptions } from "../model/useFilterOptions";
import { formatDate } from "@/shared/lib/formatDate";

const test = [
  "Bishkek",
  "Osh",
  "Jalal-Abad",
  "Naryn",
  "Batken",
  "Talas",
  "Issyk-Kul",
  "Chui",
  "ChuiChuiChuiChuiChuiChuiChuiChuiChuiChuiChui",
];

interface FilterOptionsProps {
  duration?: "col" | "row";
  isBordered?: boolean;
  topSelectMenu?: number;
  leftSelectMenu?: number;
}

export function FilterOptions({
  duration = "row",
  isBordered = true,
  topSelectMenu,
  leftSelectMenu,
}: FilterOptionsProps) {
  const {
    region,
    city,
    dateFrom,
    dateTo,
    setRegion,
    setCity,
    setDateFrom,
    setDateTo,
  } = useFilterOptions();

  return (
    <div
      className={s.filterOptions}
      style={{ flexDirection: duration === "col" ? "column" : "row" }}
    >
      <FilterSelect
        list={test}
        icon={<GeoIcon />}
        renderIcon={({ size, color }) => <GeoIcon size={size} color={color} />}
        title="Область"
        selectedValue={region}
        setSelectedValue={setRegion}
        isBordered={isBordered}
        top={topSelectMenu}
        left={leftSelectMenu}
      />

      <FilterSelect
        list={test}
        icon={<FlagIcon />}
        renderIcon={({ size, color }) => <FlagIcon size={size} color={color} />}
        title="Район"
        selectedValue={city}
        setSelectedValue={setCity}
        isBordered={isBordered}
        top={topSelectMenu}
        left={leftSelectMenu}
      />

      <FilterSelect
        list={test}
        icon={<CalendarIcon />}
        title="Дата"
        selectedValue={`${formatDate(dateFrom)} — ${formatDate(dateTo)}`}
        isBordered={isBordered}
        top={topSelectMenu}
        left={leftSelectMenu}
      >
        <div className={s.calendar}>
          <Calendar setSelected={setDateFrom} />
          <Calendar setSelected={setDateTo} />
        </div>
      </FilterSelect>

      <FilterSelect
        list={test}
        icon={<TimeIcon />}
        renderIcon={({ size, color }) => <TimeIcon size={size} color={color} />}
        title="Время"
        setSelectedValue={() => {}}
        isBordered={isBordered}
        top={topSelectMenu}
        left={leftSelectMenu}
      />

      <CashSlider className={s.cashSlider} />
    </div>
  );
}
