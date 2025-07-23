import { FieldCard } from "@/feature/field-card";
import s from "./FieldList.module.scss";

export function FieldList() {
  return (
    <div className={s.fieldList}>
      {/* Временно пока данные не будут готовы  */}
      {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
      {[1, 2, 3].map((_, i) => (
        <FieldCard />
      ))}
    </div>
  );
}
