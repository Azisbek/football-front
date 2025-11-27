import { mpaPlaceCards } from "../model/constant";
import s from "./PlaceList.module.scss";
import { PlaceCard } from "@/features/place-card";

export function PlaceList() {
  return (
    <div className={s.placeList}>
      {mpaPlaceCards.map((card) => (
        <PlaceCard
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          price={card.price}
          adress={card.adress}
          time={card.time}
          rating={card.rating}
          reviews={card.reviews}
        />
      ))}
    </div>
  );
}
