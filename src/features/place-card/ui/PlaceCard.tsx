import { GeoIcon } from "@/shared/assets/icons/ui/GeoIcon";
import s from "./PlaceCard.module.scss";
import { TimeIcon } from "@/shared/assets/icons/ui/TimeIcon";
import { InfoRow } from "@/entities/info-row";
import { InfoRating } from "@/entities/info-rating/ui/InfoRating";
import { Button } from "@/shared/ui/Button";
import { HeartIcon } from "@/shared/assets/icons/ui/HeartIcon";
import { useState } from "react";
import { useNavigate } from "react-router";

interface PlaceCardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  adress: string;
  time: string;
  rating: number;
  reviews: number;
}

export function PlaceCard({
  id,
  image,
  title,
  price,
  adress,
  time,
  rating,
  reviews,
}: PlaceCardProps) {
  const [isHeart, setIsHeart] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/places/${id}`);

  return (
    <div className={s.placeCard}>
      <div className={s.media}>
        <img src={image} alt="card-image" className={s.image} />

        <div className={s.icon} onClick={() => setIsHeart((prev) => !prev)}>
          <HeartIcon isActive={isHeart} />
        </div>
      </div>

      <div className={s.content}>
        <div className={s.head}>
          <p className={s.title}>{title}</p>
          <p className={s.price}>{price}/час</p>
        </div>

        <div className={s.info}>
          <InfoRow icon={<GeoIcon />} text={adress} />
          <InfoRow icon={<TimeIcon />} text={time} />
        </div>

        <div className={s.foot}>
          <InfoRating rating={rating} reviews={reviews} />

          <Button variant="primary" className={s.btn} onClick={handleNavigate}>
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
}
