import { FieldCard } from "@/feature/field-card";
import s from "./FieldList.module.scss";

export function FieldList() {
  return (
    <div className={s.fieldList}>
      {/* Временно пока данные не будут готовы  */}
      {}
      {[1, 2, 3].map((_, i) => (
        <FieldCard key={i} />
      ))}
    </div>
  );
}
