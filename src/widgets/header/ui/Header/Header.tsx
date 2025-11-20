import clsx from "clsx";
import s from "./Header.module.scss";
import { Avatar } from "@/entities/avatar/ui/Avatar";
import { Link } from "react-router";
import { ROUTE } from "@/shared/constant/path";

export function Header() {
  return (
    <header className={s.header}>
      <div className={clsx(s.content, s.container)}>
        <Link to={ROUTE.base} className={s.logo}>
          Logo
        </Link>

        <nav className={s.nav}>
          <Link to="#" className={s.link}>
            Главная
          </Link>
          <Link to="#" className={s.link}>
            Поля
          </Link>
          <Link to="#" className={s.link}>
            О нас
          </Link>
        </nav>

        <Avatar size={50} />
      </div>
    </header>
  );
}
