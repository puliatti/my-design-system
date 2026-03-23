import type { ReactNode } from "react";

const SportIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g transform="translate(4.016, 4.012)">
      <path d="M7.49 14.98C7.34 14.98 7.17 14.97 7.01 14.96C2.89 14.7-.25 11.13.02 7.01.14 5.01 1.04 3.19 2.54 1.87 4.04.55 5.97-.11 7.96.02 9.96.14 11.79 1.04 13.11 2.54 14.43 4.04 15.09 5.96 14.96 7.96 14.71 11.92 11.41 14.98 7.49 14.98ZM7.47.69C5.83.69 4.25 1.28 3 2.39 1.63 3.59.82 5.24.71 7.05.47 10.78 3.31 14.02 7.05 14.26 7.2 14.27 7.34 14.27 7.49 14.27 11.03 14.27 14.03 11.51 14.26 7.92 14.5 4.18 11.65.95 7.92.71 7.77.7 7.62.69 7.47.69Z" fill={color}/>
      <path d="M.35 11.11C.25 11.11.15 11.06.08 10.98-.04 10.83-.02 10.61.13 10.48 1.59 9.28 2.47 7.57 2.59 5.68 2.71 3.78 2.06 1.98.76.59.63.45.64.23.78.1.92-.04 1.14-.03 1.27.11 2.69 1.61 3.42 3.65 3.29 5.72 3.15 7.78 2.17 9.71.57 11.02.51 11.08.43 11.11.35 11.11Z" transform="translate(4.02, 3.83)" fill={color}/>
      <path d="M2.29 11.1C2.19 11.1 2.1 11.06 2.03 10.99.62 9.48-.12 7.44.02 5.38.15 3.32 1.14 1.39 2.73.08 2.88-.04 3.1-.02 3.22.13 3.35.28 3.33.5 3.17.62 1.71 1.83.83 3.54.71 5.43.59 7.33 1.24 9.13 2.54 10.52 2.67 10.66 2.67 10.88 2.53 11.01 2.46 11.06 2.37 11.1 2.29 11.1Z" transform="translate(8.89, 3.84)" fill={color}/>
      <path d="M.35 14.95C.34 14.95.34 14.95.32 14.95.13 14.94-.01 14.77 0 14.58L.91.32C.92.13 1.09-.01 1.28 0 1.47.01 1.62.18 1.61.37L.7 14.63C.69 14.81.53 14.95.35 14.95Z" transform="translate(7.0, 0.01)" fill={color}/>
      <path d="M14.59 1.61C14.59 1.61 14.58 1.61 14.57 1.61L.32.7C.13.69-.01.52 0 .32.01.13.18-.01.37 0L14.63.91C14.82.92 14.96 1.09 14.95 1.28 14.93 1.47 14.78 1.61 14.59 1.61Z" transform="translate(0.01, 6.99)" fill={color}/>
    </g>
  </svg>
);

type CardButtonProps = {
  label: string;
  type?: "speciali" | "recent";
  badgeNew?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
};

export const CardButton = ({
  label,
  type = "speciali",
  badgeNew = false,
  icon,
  onClick,
}: CardButtonProps) => {
  const isRecent = type === "recent";
  const iconColor = isRecent ? "#ffffff" : "#262c2f";

  return (
    <button
      className={`card-button card-button--${type}`}
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "9px 4px",
        borderRadius: "8px",
        boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.1)",
        background: isRecent ? "#2f3c43" : "#ffffff",
        border: "none",
        cursor: "pointer",
        position: "relative",
        gap: 0,
      }}
    >
      <span
        style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {icon || <SportIcon color={iconColor} />}
      </span>

      <span
        style={{
          width: 68,
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 500,
          fontSize: 12,
          lineHeight: "14px",
          textAlign: "center",
          color: isRecent ? "#ffffff" : "#262c2f",
        }}
      >
        {label}
      </span>

      {badgeNew && (
        <span
          style={{
            position: "absolute",
            top: 4,
            right: 4,
            height: 14,
            padding: "0 4px",
            background: "#bed62f",
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 500,
            fontSize: 10,
            lineHeight: "normal",
            color: "#262c2f",
            whiteSpace: "nowrap",
          }}
        >
          New
        </span>
      )}
    </button>
  );
};
