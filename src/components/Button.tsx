type ButtonProps = {
  label: string;
  variant?: "default" | "ghost" | "checkout" | "delete" | "secondary" | "cash-out" | "cash-out-cashed" | "cash-out-acceptance" | "alt" | "floating" | "settings";
  disabled?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
};

export const Button = ({ label, variant = "default", disabled = false, iconLeft = false, iconRight = false, onClick }: ButtonProps) => {
  return (
    <button
      className={`btn btn--${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && <span className="btn__icon btn__icon--left" />}
      {label}
      {iconRight && <span className="btn__icon btn__icon--right" />}
    </button>
  );
};
