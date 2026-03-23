import type { ReactNode } from "react";

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
      {icon && (
        <span
          style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {icon}
        </span>
      )}

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
