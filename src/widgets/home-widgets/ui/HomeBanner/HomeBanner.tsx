import s from "./HomeBanner.module.scss";
import { BannerItem } from "@/features/banner-item";
import { GreaterThan } from "@/shared/assets/icons/ui/GreaterThan";
import { useBannerCarousel } from "../../model/useBannerCarousel";
import type { IBannerTypes } from "../../model/types";
import { useScreenWidth } from "@/shared/hooks/useScreenWidth";

interface Props {
  data: IBannerTypes[];
  duration?: number;
}

export function HomeBanner({ data, duration }: Props) {
  const { isMobile } = useScreenWidth();
  const {
    containerRef,
    currentSlide,
    handleClick,
    setCurrentSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useBannerCarousel({ data, duration });

  return (
    <section className={s.homeBanner}>
      <div
        className={s.container}
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {data.map((item) => (
          <BannerItem
            key={item.id}
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>

      {!isMobile && (
        <div className={s.btnContainer}>
          <button className={s.btn} onClick={() => handleClick("prev")}>
            <GreaterThan direction="left" />
          </button>

          <button className={s.btn} onClick={() => handleClick("next")}>
            <GreaterThan direction="right" />
          </button>
        </div>
      )}

      <div className={s.dots}>
        {}
        {data.map((__item, index) => {
          return (
            <button
              key={index}
              className={index === currentSlide ? s.active : s.dot}
              onClick={() => setCurrentSlide(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
