import { Link } from "react-router-dom";
import s from "./HeaderMobile.module.scss";
import { ROUTE } from "@/shared/constant/path";
import { useState } from "react";
import clsx from "clsx";
import { Avatar } from "@/entities/avatar/ui/Avatar";
import { useLockBodyScroll } from "@/shared/hooks/useLockBodyScroll";
import { ClickOutside } from "@/shared/ui/ClickOutside/ClickOutside";

export function HeaderMobile() {
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => setIsMenu((prev) => !prev);
  useLockBodyScroll(isMenu);

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

        <div className={clsx(s.menu, isMenu && s.open)}>
          <ClickOutside onClickOutside={() => setIsMenu(false)}>
            <div className={s.content}>
              <button className={s.closeBtn} onClick={toggleMenu}>
                ✕
              </button>

              <div className={s.avatarBox}>
                <Avatar size={140} />
              </div>

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
          </ClickOutside>
        </div>
      </header>
    </div>
  );
}
