interface Props {
  color?: string;
}

export const ClockIcon = ({ color }: Props) => {
  return (
    <svg
      width="22.000000"
      height="22.000000"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M11 5L11 11L15 13M11 21C5.47 21 1 16.52 1 11C1 5.47 5.47 1 11 1C16.52 1 21 5.47 21 11C21 16.52 16.52 21 11 21Z"
        stroke={color ?? "#202020"}
        stroke-opacity="1.000000"
        stroke-width="2.000000"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
  );
};
