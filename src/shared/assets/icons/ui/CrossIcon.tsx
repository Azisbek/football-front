interface Props {
  variant?: "default" | "mini";
}

export function CrossIcon({ variant = "default" }: Props) {
  if (variant === "default") {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#202020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (variant === "mini") {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.58164 5.58145L13.4187 13.4185M5.58164 13.4185L13.4187 5.58145"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}
