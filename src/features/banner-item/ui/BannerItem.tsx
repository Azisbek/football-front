import { Button } from "@/shared/ui/Button";
import s from "./BannerItem.module.scss";

interface Props {
  image: string;
  title: string;
  subTitle: string;
}

export function BannerItem({ image, title, subTitle }: Props) {
  return (
    <div className={s.bannerItem}>
      <img src={image} alt={title} className={s.image} />

      <div className={s.content}>
        <div className={s.column}>
          <h2 className={s.title}>{title}</h2>
          <p className={s.subTitle}>{subTitle}</p>
        </div>

        <Button variant="lime" className={s.btn}>
          Забронировать
        </Button>
      </div>
    </div>
  );
}
