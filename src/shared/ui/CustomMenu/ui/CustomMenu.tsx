import clsx from "clsx";
import { ClickOutside } from "../../ClickOutside/ClickOutside";
import s from "./CustomMenu.module.scss";
import type { ReactNode } from "react";

interface CustomMenuProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  children?: ReactNode;
  className?: string;
  top?: number;
  left?: number;
}

export function CustomMenu({
  isOpen,
  setIsOpen,
  children,
  className,
  top,
  left,
}: CustomMenuProps) {
  return (
    <ClickOutside onClickOutside={() => setIsOpen?.(false)}>
      <div
        className={clsx(s.customMenu, className, isOpen && s.open)}
        style={{ top: `${top}%`, left: `${left}%` }}
      >
        {children}
      </div>
    </ClickOutside>
  );
}
