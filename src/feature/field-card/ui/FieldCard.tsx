import { GeoIcon } from "@/shared/assets/icons/ui/GeoIcon";
import s from "./FieldCard.module.scss";
import { ClockIcon } from "@/shared/assets/icons/ui/ClockIcon";
import { InfoRow } from "@/entities/info-row";
import { InfoRating } from "@/entities/info-rating/ui/InfoRating";
import { Button } from "@/shared/ui/Button";

export function FieldCard() {
  return (
    <div className={s.fieldCard}>
      <div className={s.container}>
        <img
          src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
          alt="test"
          className={s.image}
        />
      </div>

      <div className={s.content}>
        <div className={s.head}>
          <p className={s.title}>Dinamo</p>
          <p className={s.price}>320c/час</p>
        </div>

        <div className={s.info}>
          <InfoRow icon={<GeoIcon />} text="Ташкумырская улица 2" />
          <InfoRow icon={<ClockIcon />} text="08:00 - 22:00" />
        </div>

        <div className={s.foot}>
          <InfoRating rating={4.5} reviews={10} />

          <Button variant="primary" className={s.btn}>
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
}
