import { Button } from "@/shared/ui/Button";
import s from "./HomeAbout.module.scss";

export function HomeAbout() {
  return (
    <section className={s.homeAbout}>
      <img src="/images/home-about.webp" alt="about" className={s.image} />

      <div className={s.content}>
        <h3 className={s.title}>О нас</h3>

        <p className={s.description}>
          Мы — команда, объединившаяся благодаря любви к футболу и стремлению
          развивать спортивную культуру. Наша цель — сделать футбол доступнее
          для каждого, независимо от возраста и уровня подготовки. Мы организуем
          турниры, тренировки и создаём площадки, где каждый может почувствовать
          атмосферу настоящей игры. Для нас футбол — это не просто спорт, а
          стиль жизни и источник вдохновения. Присоединяйтесь к нам и станьте
          частью большой футбольной семьи!
        </p>

        <Button variant="primary" className={s.btn}>
          Подробнее
        </Button>
      </div>
    </section>
  );
}
