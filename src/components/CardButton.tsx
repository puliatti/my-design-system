import type { ReactNode } from "react";

const SportIcon = ({ color = "currentColor" }: { color?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circle outline — fills inner group area */}
    <path d="M7.49361 14.977C7.33505 14.977 7.17017 14.9707 7.01161 14.9643C2.88896 14.7043 -0.250612 11.1335 0.0157739 7.01102C0.142625 5.01318 1.04328 3.18658 2.54012 1.86737C4.0433 0.548167 5.97143 -0.111435 7.96299 0.0154116C9.96088 0.142258 11.7875 1.04287 13.1068 2.53966C14.426 4.03646 15.0856 5.96453 14.9588 7.96237C14.7051 11.92 11.407 14.977 7.49361 14.977ZM7.4746 0.694041C5.82554 0.694041 4.24624 1.28388 2.99676 2.38745C1.63312 3.58615 0.821269 5.2415 0.707104 7.04907C0.466088 10.7847 3.31389 14.0193 7.04964 14.2603C7.19552 14.2667 7.34142 14.273 7.4873 14.273C11.0328 14.273 14.0264 11.5077 14.2611 7.91797C14.5021 4.18233 11.6543 0.947736 7.91858 0.706727C7.7727 0.700384 7.62048 0.694041 7.4746 0.694041Z" transform="translate(4.5, 4.5)" fill={color}/>
    {/* Left seam curve */}
    <path d="M0.351315 11.1064C0.249834 11.1064 0.148335 11.062 0.0785673 10.9795C-0.0419409 10.8336 -0.0228947 10.6117 0.129326 10.4848C1.59445 9.27977 2.46971 7.56733 2.59022 5.67731C2.71072 3.78095 2.0638 1.97973 0.763579 0.590756C0.630386 0.451224 0.63671 0.229241 0.776246 0.096052C0.915782 -0.0371372 1.13779 -0.0307941 1.27098 0.108737C2.68537 1.61187 3.42109 3.65411 3.2879 5.71537C3.1547 7.77663 2.16528 9.71104 0.573303 11.0176C0.509878 11.081 0.427425 11.1064 0.351315 11.1064Z" transform="translate(8.514, 8.319) scale(0.6242, 0.624)" fill={color}/>
    {/* Right seam curve */}
    <path d="M2.28604 11.0952C2.19091 11.0952 2.10211 11.0572 2.03234 10.9874C0.617958 9.48427 -0.117794 7.44203 0.0153988 5.38077C0.148592 3.31951 1.13805 1.3851 2.73002 0.0785727C2.8759 -0.0419318 3.09788 -0.0229055 3.22473 0.129311C3.34524 0.275185 3.32622 0.497168 3.174 0.624015C1.70887 1.82906 0.833586 3.54149 0.713078 5.43151C0.592569 7.32787 1.23953 9.1291 2.53975 10.5181C2.67294 10.6576 2.66658 10.8796 2.52705 11.0128C2.45728 11.0635 2.3685 11.0952 2.28604 11.0952Z" transform="translate(13.382, 8.713) scale(0.6237, 0.6241)" fill={color}/>
    {/* Vertical seam line */}
    <path d="M0.349608 14.9497C0.343265 14.9497 0.336929 14.9497 0.324244 14.9497C0.133968 14.937 -0.0119165 14.7721 0.000768543 14.5755L0.907738 0.324228C0.920423 0.133958 1.08535 -0.0119161 1.28197 0.000768548C1.47225 0.0134532 1.6181 0.178354 1.60542 0.374966L0.698447 14.6262C0.685762 14.8101 0.533541 14.9497 0.349608 14.9497Z" transform="translate(11.476, 7.314) scale(0.6237, 0.6241)" fill={color}/>
    {/* Horizontal seam line */}
    <path d="M14.5949 1.61172C14.5886 1.61172 14.5823 1.61172 14.5696 1.61172L0.324244 0.698426C0.133968 0.685742 -0.0119165 0.520839 0.000768543 0.324227C0.0134536 0.133956 0.178353 -0.0119161 0.374972 0.000768558L14.6267 0.907723C14.8169 0.920408 14.9628 1.08531 14.9501 1.28192C14.9311 1.46585 14.7789 1.61172 14.5949 1.61172Z" transform="translate(7.317, 11.478) scale(0.6239, 0.6236)" fill={color}/>
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
