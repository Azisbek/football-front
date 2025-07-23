import { StarIcon } from "@/shared/assets/icons/ui/StarIcon";
import s from "./InfoRating.module.scss";

interface Props {
  rating: number;
  reviews: number;
}

export function InfoRating({ rating, reviews }: Props) {
  return (
    <div className={s.infoRating}>
      <StarIcon />

      <p className={s.text}>
        <span>{rating}</span>
        /5 ({reviews})
      </p>
    </div>
  );
}
