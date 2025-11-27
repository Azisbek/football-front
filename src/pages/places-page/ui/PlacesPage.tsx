import { FilterDesktop, FilterMobile } from "@/widgets/filters";
import s from "./PlacesPage.module.scss";
import { useScreenWidth } from "@/shared/hooks/useScreenWidth";
import { PlaceList } from "@/widgets/PlaceList/ui/PlaceList";

export function PlacesPage() {
  const { isMobile } = useScreenWidth();

  return (
    <div className={s.placesPage}>
      {isMobile ? <FilterMobile /> : <FilterDesktop />}

      <PlaceList />
    </div>
  );
}
