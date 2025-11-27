import { useState, type ReactNode } from "react";
import s from "./FilterSelect.module.scss";
import { ClickOutside } from "@/shared/ui/ClickOutside/ClickOutside";
import clsx from "clsx";

interface FilterSelectProps {
  icon: ReactNode;
  renderIcon?: (props: { size: number; color: string }) => ReactNode;
  title?: string;
  list?: string[];
  selectedValue?: string;
  setSelectedValue?: (value: string) => void;
  children?: ReactNode;
  isMenu?: boolean;
  className?: string;
  isBordered?: boolean;
  top?: number;
  left?: number;
}

export function FilterSelect({
  icon,
  title,
  list,
  selectedValue,
  setSelectedValue,
  renderIcon,
  children,
  isMenu = true,
  className,
  isBordered = true,
  top,
  left,
}: FilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMenu) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <ClickOutside onClickOutside={() => setIsOpen(false)}>
      <div
        className={clsx(s.filterSelect, className, isBordered && s.bordered)}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={s.trigger} onClick={toggleMenu}>
          <div>{icon}</div>

          <div className={s.text}>
            <p className={s.title}>{title}</p>
            <p className={s.selected}>{selectedValue ?? "Не выбрано"}</p>
          </div>
        </button>

        <div
          className={clsx(s.menu, isOpen && s.open)}
          style={{ top: `${top}px`, left: `${left}px` }}
        >
          {children
            ? children
            : list?.map((item) => (
                <div
                  key={item}
                  className={clsx(
                    s.menuItem,
                    selectedValue === item && s.selectedItem,
                  )}
                  onClick={() => {
                    setSelectedValue?.(item);
                    setIsOpen(false);
                  }}
                >
                  {renderIcon?.({
                    size: 22,
                    color: selectedValue === item ? "white" : "#202020",
                  })}
                  <p className={s.menuItemText}>{item}</p>
                </div>
              ))}
        </div>
      </div>
    </ClickOutside>
  );
}
