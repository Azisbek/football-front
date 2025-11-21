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
        src={image ?? "/images/avatar.webp"}
        alt="avatar"
        className={s.img}
        width={size}
        height={size}
      />
    </div>
  );
}
