import { FieldCard } from "@/feature/field-card";
import s from "./FieldList.module.scss";

export function FieldList() {
  return (
    <div className={s.fieldList}>
      {[1, 2, 3].map((n) => (
        <FieldCard key={n} />
      ))}
    </div>
  );
}
