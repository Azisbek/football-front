import { SearchIcon } from "@/shared/assets/icons/ui/SearchIcon";
import s from "./SearchBox.module.scss";

export function SearchBox() {
  return (
    <div className={s.searchBox}>
      <label htmlFor="searchInput" className={s.searchLabel}>
        <SearchIcon />
      </label>

      <input
        id="searchInput"
        type="text"
        className={s.searchInput}
        placeholder="Поиск поля"
      />
    </div>
  );
}
