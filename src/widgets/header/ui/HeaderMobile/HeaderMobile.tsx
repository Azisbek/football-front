import { Link } from "react-router-dom";
import s from "./HeaderMobile.module.scss";
import { ROUTE } from "@/shared/constant/path";
import { useState } from "react";
import clsx from "clsx";
import { Avatar } from "@/entities/avatar/ui/Avatar";

export function HeaderMobile() {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => setIsMenu((prev) => !prev);

  return (
    <div className={s.headerWrapper}>
      <header className={s.headerMobile}>
        <Link to={ROUTE.base} className={s.logo}>
          Logo
        </Link>

        <div
          className={clsx(s.burger, isMenu && s.active)}
          onClick={toggleMenu}
        >
          <span className={s.line}></span>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>

        {isMenu && (
          <div className={s.menu}>
            <Avatar size={200} />

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
          </div>
        )}
      </header>
    </div>
  );
}
