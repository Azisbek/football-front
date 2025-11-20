const rotationMap: Record<"top" | "bottom" | "left" | "right", number> = {
  top: -90,
  right: 0,
  bottom: 90,
  left: 180,
};

interface Props {
  color?: string;
  direction?: "top" | "bottom" | "left" | "right";
}

export const GreaterThan = ({ color = "#000", direction = "right" }: Props) => {
  const rotateDeg = rotationMap[direction];

  return (
    <svg
      width="13"
      height="22"
      viewBox="0 0 13.0073 22.0164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    >
      <path
        d="M2 2L11 11L2 20"
        stroke={color}
        strokeOpacity="1"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
};
