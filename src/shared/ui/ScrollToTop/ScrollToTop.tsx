import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
}

export function ScrollToTop({ children, className }: Props) {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div
      ref={scrollRef}
      className={className}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      {children}
    </div>
  );
}
