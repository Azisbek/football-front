import clsx from "clsx";
import { useState } from "react";
import s from "./Select.module.scss";
import { ClickOutside } from "../../ClickOutside/ClickOutside";
import { ArrowDownIcon } from "@/shared/assets/icons/ui/ArrowDownIcon";
import { ArrowUpIcon } from "@/shared/assets/icons/ui/ArrowUpIcon";
import { CustomMenu } from "../../CustomMenu";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "Выберите...",
  className,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const selected = options.find((opt) => opt.value === value);

  const handleSelect = (val: string) => {
    onChange?.(val);
    setIsOpen(false);
  };

  return (
    <ClickOutside onClickOutside={() => setIsOpen(false)}>
      <div className={clsx(s.wrapper, className)}>
        <div className={s.select} onClick={() => setIsOpen((prev) => !prev)}>
          <span className={clsx(!selected && s.placeholder)}>
            {selected?.label || placeholder}
          </span>

          {isOpen ? (
            <ArrowUpIcon color="#aaaaaa" />
          ) : (
            <ArrowDownIcon color="#aaaaaa" />
          )}
        </div>

        <CustomMenu className={s.menu} isOpen={isOpen} top={90} left={0}>
          <ul className={s.dropdown}>
            {options.map((opt) => (
              <li
                key={opt.value}
                className={clsx(s.option, opt.value === value && s.selected)}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        </CustomMenu>
      </div>
    </ClickOutside>
  );
}
