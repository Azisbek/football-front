import { HomeAbout, HomeBanner, HomeWhyWe } from "@/widgets/home-widgets";
import s from "./Home.module.scss";
import { Button } from "@/shared/ui/Button";
import { Arrow } from "@/shared/assets/icons/ui/Arrow";
import { FieldList } from "@/widgets/FieldList";
import { mockData } from "../model/mock";

export function Home() {
  return (
    <div className={s.home}>
      <HomeBanner data={mockData} duration={4000} />

      <HomeAbout />

      <section className={s.nearestField}>
        <div className={s.container}>
          <h3 className={s.title}>Ближайшие поля</h3>

          <Button variant="transparent" className={s.btn}>
            Смотреть все <Arrow />
          </Button>
        </div>

        <FieldList />
      </section>

      <HomeWhyWe />
    </div>
  );
}
