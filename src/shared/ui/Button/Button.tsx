import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

import s from "./Button.module.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: "lime" | "gray" | "primary" | "transparent" | "white";
}

export const Button = ({
  className,
  variant,
  children,
  ...resProps
}: ButtonProps) => (
  <button
    type="button"
    className={clsx(s.button, s[variant], className)}
    {...resProps}
  >
    {children}
  </button>
);
