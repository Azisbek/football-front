import type { ReactNode } from "react";
import s from "./InfoRow.module.scss";

interface Props {
  icon: ReactNode;
  text: string;
}

export function InfoRow({ icon, text }: Props) {
  return (
    <p className={s.subTitle}>
      <span className={s.icon}>{icon}</span> {text}
    </p>
  );
}
