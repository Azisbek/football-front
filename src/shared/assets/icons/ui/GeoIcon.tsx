interface Props {
  color?: string;
}

export const GeoIcon = ({ color }: Props) => {
  return (
    <svg
      width="18.000000"
      height="22.000000"
      viewBox="0 0 18 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M17 9C17 4.58 13.41 1 9 1C4.58 1 1 4.58 1 9C1 13.41 5 17 9 21C13 17 17 13.41 17 9Z"
        stroke={color ?? "#202020"}
        stroke-opacity="1.000000"
        stroke-width="2.000000"
        stroke-linejoin="round"
      />
      <path
        id="Vector"
        d="M12 9C12 7.34 10.65 6 9 6C7.34 6 6 7.34 6 9C6 10.65 7.34 12 9 12C10.65 12 12 10.65 12 9Z"
        stroke={color ?? "#202020"}
        stroke-opacity="1.000000"
        stroke-width="2.000000"
        stroke-linejoin="round"
      />
    </svg>
  );
};
