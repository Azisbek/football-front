import { SearchBox } from "@/entities/search-box";
import s from "./FilterMobile.module.scss";
import { Button } from "@/shared/ui/Button";
import { FilterIcon } from "@/shared/assets/icons/ui/FilterIcon";
import { Modal } from "@/shared/ui/Modal";
import { useState } from "react";
import { CrossIcon } from "@/shared/assets/icons/ui/CrossIcon";
import { Select } from "@/shared/ui/Select";

export function FilterMobile() {
  const [isModal, setIsModal] = useState(false);
  const [city, setCity] = useState("");

  return (
    <div className={s.filterMobile}>
      <SearchBox />

      <div className={s.line}></div>

      <Button
        variant="primary"
        className={s.btn}
        onClick={() => setIsModal(true)}
      >
        <FilterIcon color="white" />
      </Button>

      <Modal
        className={s.modal}
        isOpen={isModal}
        onClick={() => setIsModal(false)}
      >
        <div className={s.modalHeader}>
          <p>Фильтрация</p>

          <button className={s.btnCross}>
            <CrossIcon variant="mini" />
          </button>
        </div>

        <div className={s.box}>
          <p className={s.title}>Город</p>

          <Select
            placeholder="Выберите город"
            options={[
              { label: "one", value: "1" },
              { label: "two", value: "2" },
            ]}
            value={city}
            onChange={setCity}
          />
        </div>
      </Modal>
    </div>
  );
}
