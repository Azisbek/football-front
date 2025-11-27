import { useScreenWidth } from "@/shared/hooks/useScreenWidth";
import { ScrollToTop } from "@/shared/ui/ScrollToTop";
import { Header, HeaderMobile } from "@/widgets/header";
import { Outlet } from "react-router";

export function Layout() {
  const { isMobile } = useScreenWidth();

  return (
    <ScrollToTop>
      {isMobile ? <HeaderMobile /> : <Header />}

      <main className="container">
        <Outlet />
      </main>

      <div>footer</div>
    </ScrollToTop>
  );
}
