import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

import s from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = ({
  className,
  children,
  ...resProps
}: ButtonProps) => (
  <button type='button' className={clsx(s.button, className)} {...resProps}>
    {children}
  </button>
);
