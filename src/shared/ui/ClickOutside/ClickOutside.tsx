import { useEffect, useRef } from "react";

interface Props {
  onClickOutside: () => void;
  children: React.ReactNode;
}

export function ClickOutside({ onClickOutside, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
}
