import s from "./Modal.module.scss";
import clsx from "clsx";
import type { ReactNode } from "react";
import { ClickOutside } from "../../ClickOutside/ClickOutside";

interface Props {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClick?: () => void;
}

export function Modal({ isOpen, children, className, onClick }: Props) {
  return (
    <div className={clsx(s.overlay, isOpen && s.open)}>
      <ClickOutside onClickOutside={() => onClick?.()}>
        <div className={clsx(s.content, className, isOpen && s.open)}>
          {children}
        </div>
      </ClickOutside>
    </div>
  );
}
