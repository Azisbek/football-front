import { useScreenWidth } from "@/shared/hooks/useScreenWidth";
import { Header, HeaderMobile } from "@/widgets/header";
import { Outlet } from "react-router";

export function Layout() {
  const { isMobile } = useScreenWidth();

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}

      <main className="container">
        <Outlet />
      </main>

      <div>footer</div>
    </>
  );
}
