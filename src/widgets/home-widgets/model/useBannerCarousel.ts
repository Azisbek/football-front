import { useEffect, useRef, useState } from "react";
import type { IBannerTypes } from "./types";

interface Props {
  duration?: number;
  data: IBannerTypes[];
}

export function useBannerCarousel({ duration, data }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pauseCounter, setPauseCounter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isTouching = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isTouching.current = true;
    setPauseCounter(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isTouching.current = false;
    setPauseCounter(false);

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
      setCurrentSlide((prev) => {
        if (pauseCounter) {
          return 0;
        }

        return (prev + 1) % data.length;
      });
    }, duration ?? 3000);

    return () => clearInterval(interval);
  }, [data.length, duration, pauseCounter]);

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
