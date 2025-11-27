import { HomeAbout, HomeBanner, HomeWhyWe } from "@/widgets/home-widgets";
import s from "./Home.module.scss";
import { Button } from "@/shared/ui/Button";
import { mockData } from "../model/mock";
import { ArrowRightIcon } from "@/shared/assets/icons/ui/ArrowRightIcon";
import { PlaceList } from "@/widgets/PlaceList/ui/PlaceList";
import { useNavigate } from "react-router";
import { ROUTE } from "@/shared/constant/path";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className={s.home}>
      <HomeBanner data={mockData} duration={4000} />

      <HomeAbout />

      <section className={s.nearestPlaces}>
        <div className={s.container}>
          <h3 className={s.title}>Ближайшие поля</h3>

          <Button
            className={s.btn}
            variant="transparent"
            onClick={() => navigate(ROUTE.places)}
          >
            Смотреть все <ArrowRightIcon />
          </Button>
        </div>

        <PlaceList />
      </section>

      <HomeWhyWe />
    </div>
  );
}
