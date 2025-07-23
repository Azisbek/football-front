import s from "./WhyWeCard.module.scss";

interface Props {
  title: string;
  image: string;
  width: number;
  height: number;
  top: number;
  right: number;
}

export function WhyWeCard({ title, image, width, height, top, right }: Props) {
  return (
    <div className={s.card}>
      <p className={s.title}>{title}</p>
      <img
        src={image}
        alt="illustration"
        className={s.image}
        width={width}
        height={height}
        style={{ top: top, right: right }}
      />
    </div>
  );
}
