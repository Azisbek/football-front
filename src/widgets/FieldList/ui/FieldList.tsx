import { FieldCard } from "@/feature/field-card";
import s from "./FieldList.module.scss";

export function FieldList() {
  return (
    <div className={s.fieldList}>
      <FieldCard />
      <FieldCard />
      <FieldCard />
    </div>
  );
}
