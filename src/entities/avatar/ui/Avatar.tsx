import { useNavigate } from "react-router";
import s from "./Avatar.module.scss";

interface Props {
  image?: string;
  size: number;
  to?: string;
}

export function Avatar({ image, size, to }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className={s.avatar}
      onClick={() => {
        if (to) navigate(to);
      }}
      style={{ width: size, height: size }}
    >
      <img
        src={
          image ??
          "https://i.pinimg.com/1200x/f3/23/33/f323338233ea1ef3e83ad205919f7a3a.jpg"
        }
        alt="avatar"
        className={s.img}
        width={size}
        height={size}
      />
    </div>
  );
}
