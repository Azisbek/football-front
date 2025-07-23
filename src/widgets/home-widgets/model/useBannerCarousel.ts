import { useEffect, useRef, useState } from "react";
import type { IBannerTypes } from "./types";

interface Props {
  duration?: number;
  data: IBannerTypes[];
}

export function useBannerCarousel({ duration, data }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0 && currentSlide < data.length - 1) {
        setCurrentSlide((prev) => prev + 1);
      } else if (distance < 0 && currentSlide > 0) {
        setCurrentSlide((prev) => prev - 1);
      }
    }
  };

  const handleClick = (value: "prev" | "next") => {
    setCurrentSlide((prev) => {
      if (value === "next") {
        return prev === data.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? data.length - 1 : prev - 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, duration ?? 3000);

    return () => clearInterval(interval);
  }, [data.length, duration]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const child = container.children[currentSlide] as HTMLElement;
    if (!child) return;

    const left = child.offsetLeft;
    container.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [currentSlide]);

  return {
    currentSlide,
    containerRef,
    handleClick,
    setCurrentSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
