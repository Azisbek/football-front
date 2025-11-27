import s from "./FilterDesktop.module.scss";
import { useScreenWidth } from "@/shared/hooks/useScreenWidth";
import { FilterOptions } from "@/features/filter-options";
import { Button } from "@/shared/ui/Button";
import { FilterIcon } from "@/shared/assets/icons/ui/FilterIcon";
import { CashSlider } from "@/features/cash-slider";
import { CustomMenu } from "@/shared/ui/CustomMenu";
import { useState } from "react";
import { SearchBox } from "@/entities/search-box";

export function FilterDesktop() {
  const [isMenu, setIsMenu] = useState(false);
  const { width } = useScreenWidth();

  return (
    <div className={s.filterDesktop}>
      <SearchBox />

      <div className={s.line}></div>

      {width >= 1280 ? (
        <FilterOptions />
      ) : (
        <div className={s.options}>
          <Button variant="primary" onClick={() => setIsMenu(true)}>
            <FilterIcon color="white" />
          </Button>

          <CashSlider className={s.cashSlider} />
        </div>
      )}

      <div className={s.menuWrapper}>
        <CustomMenu isOpen={isMenu} setIsOpen={setIsMenu} top={100} left={0}>
          <FilterOptions
            duration="col"
            isBordered={false}
            topSelectMenu={0}
            leftSelectMenu={180}
          />
        </CustomMenu>
      </div>
    </div>
  );
}
