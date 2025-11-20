const rotationMap: Record<"left" | "right", number> = {
  right: 0,
  left: 180,
};

interface Props {
  color?: string;
  direction?: "left" | "right";
}

export const Arrow = ({ color, direction = "right" }: Props) => {
  const rotateDeg = rotationMap[direction];

  return (
    <svg
      width="18.000000"
      height="14.007812"
      viewBox="0 0 18 14.0078"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M1 7L17 7M11 13L17 7L11 1"
        stroke={color ?? "#202020"}
        stroke-opacity="1.000000"
        stroke-width="2.000000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  );
};
