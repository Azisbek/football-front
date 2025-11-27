import { useState, useRef, useEffect } from "react";
import s from "./RangeSlider.module.scss";
import clsx from "clsx";

interface RangeSliderProps {
  max?: number;
  min?: number;
  start?: number;
  end?: number;
  setStart?: (value: number) => void;
  setEnd?: (value: number) => void;
  className?: string;
}

export function RangeSlider({
  max = 100,
  min = 0,
  start = 20,
  end = 70,
  setStart,
  setEnd,
  className,
}: RangeSliderProps) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.getBoundingClientRect().width);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const step = sliderWidth / (max - min);

  const startDrag = (thumb: "left" | "right", e: MouseEvent | TouchEvent) => {
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();

    const getClientX = (event: MouseEvent | TouchEvent) =>
      "touches" in event ? event.touches[0].clientX : event.clientX;

    const onMove = (event: MouseEvent | TouchEvent) => {
      const x = getClientX(event) - rect.left;
      const rawValue = min + x / step;

      if (thumb === "left" && setStart) {
        setStart(Math.round(Math.min(Math.max(min, rawValue), end - 1)));
      }
      if (thumb === "right" && setEnd) {
        setEnd(Math.round(Math.max(Math.min(max, rawValue), start + 1)));
      }
    };

    const onUp = () => {
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onUp);
    };

    window.addEventListener("mousemove", onMove as EventListener);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove as EventListener);
    window.addEventListener("touchend", onUp);
  };

  return (
    <div className={clsx(s.rangeSlider, className)} ref={sliderRef}>
      <div
        className={s.range}
        style={{
          left: `${(start - min) * step}px`,
          width: `${(end - start) * step}px`,
        }}
      />

      <div
        className={s.thumb}
        style={{ left: `${(start - min) * step}px` }}
        onMouseDown={(e) => startDrag("left", e.nativeEvent)}
        onTouchStart={(e) => startDrag("left", e.nativeEvent)}
      />

      <div
        className={s.thumb}
        style={{ left: `${(end - min) * step}px` }}
        onMouseDown={(e) => startDrag("right", e.nativeEvent)}
        onTouchStart={(e) => startDrag("right", e.nativeEvent)}
      />
    </div>
  );
}
