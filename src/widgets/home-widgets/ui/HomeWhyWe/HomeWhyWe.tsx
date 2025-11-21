import { WhyWeCard } from "@/entities/why-we-card";
import s from "./HomeWhyWe.module.scss";

export function HomeWhyWe() {
  return (
    <section className={s.homeWhyWe}>
      <h3 className={s.title}>Почему мы?</h3>

      <div className={s.container}>
        <WhyWeCard
          title="Мгновенное бронирование"
          image="/images/illustrations/image1.webp"
          width={320}
          height={320}
          top={-20}
          right={-80}
        />{" "}
        <WhyWeCard
          title="Мгновенное бронирование"
          image="/images/illustrations/image2.webp"
          width={290}
          height={290}
          top={-20}
          right={-30}
        />{" "}
        <WhyWeCard
          title="Мгновенное бронирование"
          image="/images/illustrations/image3.webp"
          width={358}
          height={239}
          top={30}
          right={-40}
        />{" "}
        <WhyWeCard
          title="Мгновенное бронирование"
          image="/images/illustrations/image4.webp"
          width={210}
          height={180}
          top={60}
          right={-20}
        />
      </div>
    </section>
  );
}
